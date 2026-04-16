function mostrarVentanaRecargas() {
    const fondoventanaRecarga = document.getElementById("fondoventanaRecarga");
    fondoventanaRecarga.classList.remove("hidden");
}

function quitarVentana() {
    const fondoventanaRecarga = document.getElementById("fondoventanaRecarga");
    fondoventanaRecarga.classList.add("hidden");

    const tipoDocumento = document.getElementById("tipoDocumento");
    const numeroDocumento = document.getElementById("numeroDocumento");
    const valorRecarga = document.getElementById("valorRecarga");
    const advertenciaRecarga = document.getElementById("advertenciaRecarga");

    tipoDocumento.selectedIndex = 0;
    numeroDocumento.value = "";
    valorRecarga.value = "";
    advertenciaRecarga.textContent = "";

}

function realizarRecarga(callback) {
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const numeroDocumento = document.getElementById("numeroDocumento").value;
    const valorRecarga = Number(document.getElementById("valorRecarga").value);
    
    const advertenciaRecarga = document.getElementById("advertenciaRecarga");

    let saldo = Number(document.getElementById("saldo").textContent.slice(1));
    let saldoApp = document.getElementById("saldo");
    
    if (tipoDocumento === "" || numeroDocumento === "" || valorRecarga === "") {
        advertenciaRecarga.textContent = "Debe rellenar todos los campos!";
    } else if (valorRecarga <= 100 || valorRecarga > 100000) {
        advertenciaRecarga.textContent = "Debe ingresar un valor válido!";
    } else {
        saldoApp.textContent = `$${saldo + valorRecarga}`;
        callback()
    }

}

// Toggle sidebar

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("hidden");
}

// Aquí vamos a comenzar a crear los usuarios a partir de una clase.
let listaUsuarios = [];

class Usuario {

    constructor(nombre, tipoDocumento, numeroDocumento, correo, clave) {
        // Datos con los que el usuario se registra
        this.nombre = nombre;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.correo = correo;
        this.clave = clave;

        // Datos adicionales que el usuario llena (opcionalmente pero recomendado)
        this.numeroCelular;
        this.telefonoContacto;
        this.ocupacion;
        this.direccion;

        // Datos de la Civica
        this.saldoCivica = 0;
        this.perfilCivica;
        this.numeroTarjeta;
        this.registroMovimientos = [];
        this.saldoPendiente = false;

        // Datos de CivicaPay
        this.saldoCivicaPay = 0;
        
    }
}

const nombre = window.prompt("Ingrese su nombre:");
const tipoDocumento = window.prompt("Ingrese su tipo de documento:");
const numeroDocumento = window.prompt("Ingrese su numero de documento:");
const correo = window.prompt("Ingrese su correo:");
const clave = window.prompt("Ingrese su clave:");

const user1 = new Usuario(nombre, tipoDocumento, numeroDocumento, correo, clave)

const bienvenida = document.getElementById("bienvenida");
bienvenida.textContent = `Bienvenido de nuevo, ${user1.nombre}!`

