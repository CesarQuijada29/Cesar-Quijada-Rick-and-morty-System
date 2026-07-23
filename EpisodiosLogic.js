const darkMode= document.getElementById('darkSkin');
let datosRecuperados = localStorage.getItem('cuentaActiva');
let cuentaActual = datosRecuperados ? JSON.parse(datosRecuperados) : null;
let datosanteriores = localStorage.getItem('usuariosRegistrados');
let listaUsuarios = datosanteriores ? JSON.parse(datosanteriores) : [];
//Personajes
class Capitulo {
    constructor(ID,name, fecha, codigo) {
        this.ID=ID
        this.name = name;
        this.fecha=fecha;
        this.codigo=codigo;
    }
}
let datosCapitulos = localStorage.getItem('datosCapitulos');
let listaCapitulos = datosCapitulos ? JSON.parse(datosCapitulos) : [
    {ID:1,name: "Pilot", fecha: "2 de diciembre de 2013", codigo: "EP#1"},
    {ID:2,name: "Lawnmower Dog", fecha: "9 de diciembre de 2013", codigo: "EP#2"},
    {ID:3,name: "Anatomy Park", fecha: "16 de diciembre de 2013", codigo: "EP#3"},
    {ID:4,name: "M. Night Shaym-Aliens!", fecha: "13 de enero de 2014", codigo: "EP#4"},
    {ID:5,name: "Meeseeks and Destroy", fecha: "20 de enero de 2014", codigo: "EP#5"},
];
localStorage.setItem('datosCapitulos', JSON.stringify(listaCapitulos));
const Tabla= document.getElementById('ContentTable');

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
    const btnbuscar = document.getElementById("btn-buscar");
    if (btnbuscar) {
        btnbuscar.addEventListener("click", () => {
            let CapituloIngresado = document.querySelector('input[type="text"]').value;
            let encontrado=0;
            if(CapituloIngresado){
                for (const Capitulo of listaCapitulos) {
                    console.log(Capitulo);
                    let comparacion= Capitulo.name;
                    if (comparacion===CapituloIngresado){
                        encontrado=1;
                        localStorage.setItem('CapituloActivo', JSON.stringify(Capitulo));
                    }
                }
                if (encontrado===1){
                    window.location.href="CapitulosDetallados.html";
                    alert("Capitulo Encontrado")
                }
                else{
                    alert("No encontrado")
                }
            }
            else{
                alert("Tienes que llenar la barra de búsqueda");
            }
        });
    }
    const Personajes = document.getElementById("PersonajesButton");
    if (Personajes) {
        Personajes.addEventListener("click", () => {
            window.location.href = "Personajes.html";
        });
    }
    //colocacion de los personajes
    cargarDatosDeCapitulo();
    //Preparacion de los botones
    document.querySelectorAll(".cajaCapitulo").forEach(elemento => {
    elemento.addEventListener('click', (e) => { 
        e.preventDefault();
        let textoElemento = e.currentTarget.textContent.trim();

        let CapituloEncontrado = listaCapitulos.find(episode =>
            episode.name === textoElemento
        );
        console.log(CapituloEncontrado);
        if (CapituloEncontrado) {
            localStorage.setItem('CapituloActivo', JSON.stringify(CapituloEncontrado));
            console.log(CapituloEncontrado);
            window.location.href="CapitulosDetallados.html";
        } else {
            alert("ERROR: FALLO AL ENCONTRAR INFORMACION DEL CAPITULO");
        }
    });
});
});

function cargarDatosDeCapitulo(){
    for (const Capitulo of listaCapitulos) {
        console.log(Capitulo);
        const boton = document.createElement('div');
        NewText= Capitulo.name;
        boton.textContent= NewText;
        boton.classList.add("cajaCapitulo");
        Tabla.appendChild(boton);
    }
}

function guardarCambiosGlobales() {
    const idx = listaUsuarios.findIndex(u => u.nombre === cuentaActual.nombre);
    if (idx !== -1) listaUsuarios[idx] = cuentaActual;
    localStorage.setItem('usuariosRegistrados', JSON.stringify(listaUsuarios));
    localStorage.setItem('cuentaActiva', JSON.stringify(cuentaActual));
}
