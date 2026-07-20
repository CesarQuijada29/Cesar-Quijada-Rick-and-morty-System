const darkMode= document.getElementById('darkSkin');
let datosRecuperados = localStorage.getItem('cuentaActiva');
let listaUsuarios = datosRecuperados ? JSON.parse(datosRecuperados) : [];
let cuentaActual = datosRecuperados ? JSON.parse(datosRecuperados) : null;

darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
});
const Destacado = document.getElementById("CapitulosButton");
Destacado.style.backgroundColor = "#d1ff6d";

document.addEventListener('DOMContentLoaded', () => {
    //nombre de usuario 
    const Username = document.getElementById("ProfilePicture");
    const actualUserName=cuentaActual.nombre
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