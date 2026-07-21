let datosRecuperados = localStorage.getItem('cuentaActiva');
let cuentaActual = datosRecuperados ? JSON.parse(datosRecuperados) : null;
let datosanteriores = localStorage.getItem('usuariosRegistrados');
let listaUsuarios = datosanteriores ? JSON.parse(datosanteriores) : [];
let datosPersonaje = localStorage.getItem('PersonajeActivo');
let personajeActual = datosPersonaje ? JSON.parse(datosPersonaje) : null;
let datosPersonajes = localStorage.getItem('datosPersonajes');
let listaPersonajes = datosPersonajes ? JSON.parse(datosPersonajes) : [
    {ID:1,name: "Morty", especie: "Humano", genero: "Masculino", tipo: "Protagonista",imagen: "Morty.png"},
    {ID:2,name: "Rick", especie: "Humano/Ciborg", genero: "Masculino", tipo: "Protagonista",imagen: "Rick.png"},
    {ID:3,name: "Summer", especie: "Humano", genero: "Femenino", tipo: "Secundario",imagen: "Summer.png"},
    {ID:4,name: "Jerry", especie: "Humano", genero: "Masculino", tipo: "Secundario",imagen: "Jerry.png"},
    {ID:5,name: "Beth", especie: "Humano", genero: "Femenino", tipo: "Secundario",imagen: "Beth.png"},
    {ID:6,name: "Evil Morty", especie: "Humano", genero: "Masculino", tipo: "Secundario",imagen: "Evilorty.png"},
];

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
    const btnAtras = document.getElementById("AtrasButton");
    if (btnAtras) {
        btnAtras.addEventListener("click", () => {
            window.location.href = "Personajes.html";
        });
    }
    const InfoNombre = document.getElementById("Nombre");
    InfoNombre.textContent=personajeActual.name;
    InfoNombre.id = 'Titulo';
    InfoNombre.style.fontSize = "5em"
    const InfoID = document.getElementById("ID");
    InfoID.textContent="ID: "+ personajeActual.ID;
    InfoID.style.fontSize = "2em"
    const InfoGenero = document.getElementById("Genero");
    InfoGenero.textContent="Género: "+ personajeActual.genero;
    InfoGenero.style.fontSize = "2em"
    const InfoEspecie = document.getElementById("Especie");
    InfoEspecie.textContent="Especie: "+ personajeActual.especie;
    InfoEspecie.style.fontSize = "2em"
    const InfoTipo = document.getElementById("Tipo");
    InfoTipo.textContent="Tipo de personaje: "+ personajeActual.tipo;
    InfoTipo.style.fontSize = "2em"
    const InfoImagen = document.getElementById("SeccionDetalles");
    imagen = personajeActual.imagen
    InfoImagen.style.backgroundImage = "url('"+imagen+"')";

    //seccion de edición
    const inputID = document.getElementById("NewID");
    const inputGenero = document.getElementById("Newgenero");
    const inputEspecie = document.getElementById("Newespecie");
    const inputTipo = document.getElementById("NewTipo");

    document.querySelector('#btn-Editar').addEventListener('click', (e) => { 
        e.preventDefault();       
        if(inputID.value && inputGenero.value && inputEspecie.value && inputTipo.value){
            personajeActual.ID=inputID.value;
            personajeActual.genero=inputGenero.value;
            personajeActual.especie=inputEspecie.value;
            personajeActual.tipo=inputTipo.value;
            const idx = listaPersonajes.findIndex(u => u.name === personajeActual.name);
            if (idx !== -1) listaPersonajes[idx] = personajeActual;
            localStorage.setItem('datosPersonajes', JSON.stringify(listaPersonajes));
            localStorage.setItem('PersonajeActivo', JSON.stringify(personajeActual));
            alert(`¡Edición exitosa ${actualUserName}!\n`);
            window.location.href = "PersonajeDetallado.html";
        }
        else{
            alert(`¡Edición Fallida!\n\nRevisa si llenaste bien los datos :[, ${actualUserName}.\n`);
        }
    });
});