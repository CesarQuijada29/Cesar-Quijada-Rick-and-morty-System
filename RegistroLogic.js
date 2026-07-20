document.body.classList.toggle("Registro-mode");
class cuenta {
    constructor(nombre, contraseña,mode) {
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.mode=mode
    }
}

let datosPrevios = localStorage.getItem('usuariosRegistrados');
let listaUsuarios = datosPrevios ? JSON.parse(datosPrevios) : [];
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("password");
const inputContraseña2 = document.getElementById("confirm-password");

document.querySelector('#btn-registro').addEventListener('click', (e) => { 
    e.preventDefault();

    let usuarioExtraido = inputUsuario.value;
    let contraseñaExtraida = inputContraseña.value;
    let ConfirmContraseñaExtraida =inputContraseña2.value;
    
    if(contraseñaExtraida===ConfirmContraseñaExtraida){
        let user = new cuenta(
            usuarioExtraido, 
            contraseñaExtraida, 
            mode=0,
        );

        listaUsuarios.push(user);
        localStorage.setItem('usuariosRegistrados', JSON.stringify(listaUsuarios));
        alert(`¡Registro exitoso!\n\nBienvenido a Rick and Morty System, ${usuarioExtraido}.\n`);
        window.location.href = "LogIn.html";
    }
    else{
        alert(`¡Registro Fallido!\n\nRevisa si llenaste bien los datos :[, ${usuarioExtraido}.\n`);
    }
    

});