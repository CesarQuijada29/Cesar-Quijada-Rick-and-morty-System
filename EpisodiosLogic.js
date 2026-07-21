const darkMode= document.getElementById('darkSkin');
let datosRecuperados = localStorage.getItem('cuentaActiva');
let cuentaActual = datosRecuperados ? JSON.parse(datosRecuperados) : null;
let datosanteriores = localStorage.getItem('usuariosRegistrados');
let listaUsuarios = datosanteriores ? JSON.parse(datosanteriores) : [];

darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    if(cuentaActual.mode===0){
        cuentaActual.mode=1;
        guardarCambiosGlobales()
    }
    else{
        cuentaActual.mode=0;
        guardarCambiosGlobales()
    }
});
const Destacado = document.getElementById("CapitulosButton");
Destacado.style.backgroundColor = "#d1ff6d";

document.addEventListener('DOMContentLoaded', () => {
    //nombre de usuario 
    const Username = document.getElementById("ProfilePicture");
    const actualUserName=cuentaActual.nombre
    let Mode=cuentaActual.mode;
    if (Mode===1){
        document.body.classList.toggle("dark-mode");
    }
    Username.textContent = actualUserName;
    // Cerrar Sesión
    const btnCerrar = document.getElementById("SalirButton");
    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            window.location.href = "LogIn.html";
        });
    }
    const Personajes = document.getElementById("PersonajesButton");
    if (Personajes) {
        Personajes.addEventListener("click", () => {
            window.location.href = "Personajes.html";
        });
    }
});

function guardarCambiosGlobales() {
    const idx = listaUsuarios.findIndex(u => u.nombre === cuentaActual.nombre);
    if (idx !== -1) listaUsuarios[idx] = cuentaActual;
    localStorage.setItem('usuariosRegistrados', JSON.stringify(listaUsuarios));
    localStorage.setItem('cuentaActiva', JSON.stringify(cuentaActual));
}