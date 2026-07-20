const darkMode= document.getElementById('darkSkin');
let datosRecuperados = localStorage.getItem('usuariosRegistrados');
let listaUsuarios = datosRecuperados ? JSON.parse(datosRecuperados) : [];

darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
});

document.getElementById("btn-registro").addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href="registro.html";
});

document.getElementById("btn-ingresar").addEventListener('click', (e) => {
    e.preventDefault();

    let userIngresado = document.querySelector('input[type="text"]').value;
    let contraseñaIngresada = document.querySelector('input[type="password"]').value;


    let cuentaEncontrada = listaUsuarios.find(cuenta =>
        cuenta.nombre === userIngresado && cuenta.contraseña === contraseñaIngresada
    );

    if (cuentaEncontrada) {
        localStorage.setItem('cuentaActiva', JSON.stringify(cuentaEncontrada));
        console.log(listaUsuarios);
        window.location.href="Personajes.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});