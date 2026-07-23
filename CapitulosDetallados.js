let datosRecuperados = localStorage.getItem('cuentaActiva');
let cuentaActual = datosRecuperados ? JSON.parse(datosRecuperados) : null;
let datosanteriores = localStorage.getItem('usuariosRegistrados');
let listaUsuarios = datosanteriores ? JSON.parse(datosanteriores) : [];
let datosCapitulo = localStorage.getItem('CapituloActivo');
let CapituloActual = datosCapitulo ? JSON.parse(datosCapitulo) : null;
let datosCapitulos = localStorage.getItem('datosCapitulos');
let listaCapitulos = datosCapitulos ? JSON.parse(datosCapitulos) : [
    {ID:1,name: "Pilot", fecha: "2 de diciembre de 2013", codigo: "EP#1"},
    {ID:2,name: "Lawnmower Dog", fecha: "9 de diciembre de 2013", codigo: "EP#2"},
    {ID:3,name: "Anatomy Park", fecha: "16 de diciembre de 2013", codigo: "EP#3"},
    {ID:4,name: "M. Night Shaym-Aliens!", fecha: "13 de enero de 2014", codigo: "EP#4"},
    {ID:5,name: "Meeseeks and Destroy", fecha: "20 de enero de 2014", codigo: "EP#5"},
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
            window.location.href = "index.html";
        });
    }
    const btnAtras = document.getElementById("AtrasButton");
    if (btnAtras) {
        btnAtras.addEventListener("click", () => {
            window.location.href = "Episodios.html";
        });
    }
    const InfoNombre = document.getElementById("Nombre");
    InfoNombre.textContent=CapituloActual.name;
    InfoNombre.id = 'Titulo';
    InfoNombre.style.fontSize = "5em";
    const InfoID = document.getElementById("ID");
    InfoID.textContent="ID: " + CapituloActual.ID;
    InfoID.style.fontSize = "2em"
    const InfoFecha = document.getElementById("Fecha");
    InfoFecha.textContent="Fecha de emisión: "+ CapituloActual.fecha;
    InfoFecha.style.fontSize = "2em"
    const InfoCodigo = document.getElementById("Codigo");
    InfoCodigo.textContent="Código: "+ CapituloActual.codigo;
    InfoCodigo.style.fontSize = "2em"

    //seccion de edición
    const inputID = document.getElementById("NewID");
    const inputFecha = document.getElementById("NewFecha");
    const inputCodigo = document.getElementById("NewCodigo");

    document.querySelector('#btn-Editar').addEventListener('click', (e) => { 
        e.preventDefault();       
        if(inputID.value && inputFecha.value && inputCodigo.value){
            CapituloActual.ID=inputID.value;
            CapituloActual.fecha=inputFecha.value;
            CapituloActual.codigo=inputCodigo.value;
            const idx = listaCapitulos.findIndex(u => u.name === CapituloActual.name);
            if (idx !== -1) listaCapitulos[idx] = CapituloActual;
            localStorage.setItem('datosCapitulos', JSON.stringify(listaCapitulos));
            localStorage.setItem('CapituloActivo', JSON.stringify(CapituloActual));
            alert(`¡Edición exitosa ${actualUserName}!\n`);
            window.location.href = "CapitulosDetallados.html";
        }
        else{
            alert(`¡Edición Fallida!\n\nRevisa si llenaste bien los datos :[, ${actualUserName}.\n`);
        }
    });
});