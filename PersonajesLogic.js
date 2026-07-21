const darkMode= document.getElementById('darkSkin');
let datosRecuperados = localStorage.getItem('cuentaActiva');
let cuentaActual = datosRecuperados ? JSON.parse(datosRecuperados) : null;
let datosanteriores = localStorage.getItem('usuariosRegistrados');
let listaUsuarios = datosanteriores ? JSON.parse(datosanteriores) : [];
//Personajes
class Personaje {
    constructor(ID,name, especie, genero, tipo, imagen) {
        this.ID=ID
        this.name = name;
        this.especie=especie;
        this.genero=genero;
        this.tipo=tipo;
        this.imagen=imagen;
    }
}
let datosPersonajes = localStorage.getItem('datosPersonajes');
let listaPersonajes = datosPersonajes ? JSON.parse(datosPersonajes) : [
    {ID:1,name: "Morty", especie: "Humano", genero: "Masculino", tipo: "Protagonista",imagen: "Morty.png"},
    {ID:2,name: "Rick", especie: "Humano/Ciborg", genero: "Masculino", tipo: "Protagonista",imagen: "Rick.png"},
    {ID:3,name: "Summer", especie: "Humano", genero: "Femenino", tipo: "Secundario",imagen: "Summer.png"},
    {ID:4,name: "Jerry", especie: "Humano", genero: "Masculino", tipo: "Secundario",imagen: "Jerry.png"},
    {ID:5,name: "Beth", especie: "Humano", genero: "Femenino", tipo: "Secundario",imagen: "Beth.png"},
    {ID:6,name: "Evil Morty", especie: "Humano", genero: "Masculino", tipo: "Secundario",imagen: "Evilorty.png"},
];
localStorage.setItem('datosPersonajes', JSON.stringify(listaPersonajes));
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
const Destacado = document.getElementById("PersonajesButton");
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
    const Capitulos = document.getElementById("CapitulosButton");
    if (Capitulos) {
        Capitulos.addEventListener("click", () => {
            window.location.href = "Episodios.html";
        });
    }
    //colocacion de los personajes
    cargarDatosDePersonaje();
    //Preparacion de los botones
    document.querySelectorAll(".cajaPersonaje").forEach(elemento => {
    elemento.addEventListener('click', (e) => { 
        e.preventDefault();
        let textoElemento = e.currentTarget.textContent.trim();

        let personajeEncontrado = listaPersonajes.find(character =>
            character.name === textoElemento
        );
        if (personajeEncontrado) {
            localStorage.setItem('PersonajeActivo', JSON.stringify(personajeEncontrado));
            console.log(personajeEncontrado);
            window.location.href="PersonajeDetallado.html";
        } else {
            alert("ERROR: FALLO AL ENCONTRAR INFORMACION DEL PERSONAJE");
        }
    });
});
});

function cargarDatosDePersonaje(){
    for (const Personaje of listaPersonajes) {
        console.log(Personaje);
        const boton = document.createElement('div');
        boton.textContent= Personaje.name;
        boton.classList.add("cajaPersonaje");
        imagen = Personaje.imagen
        console.log("url('"+imagen+"')");
        boton.style.backgroundImage = "url('"+imagen+"')";
        Tabla.appendChild(boton);
    }
}

function guardarCambiosGlobales() {
    const idx = listaUsuarios.findIndex(u => u.nombre === cuentaActual.nombre);
    if (idx !== -1) listaUsuarios[idx] = cuentaActual;
    localStorage.setItem('usuariosRegistrados', JSON.stringify(listaUsuarios));
    localStorage.setItem('cuentaActiva', JSON.stringify(cuentaActual));
}
