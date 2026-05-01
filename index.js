// Ventana de recarga Cívica
const ventanaRecargaCivica = document.getElementById("recargarCivica");

// Abrir ventana de recarga Cívica
function abrirVentanaRecargaCivica() {
    ventanaRecargaCivica.classList.remove("hidden");
}

// Cerrar ventana de recarga Cívica
function cerrarVentanaRecargaCivica() {
    ventanaRecargaCivica.classList.add("hidden");
}

// Cerrar ventana al dar click afuera
ventanaRecargaCivica.addEventListener("click", (e) => {
    if (e.target === ventanaRecargaCivica) {
        cerrarVentanaRecargaCivica();
    }
})

// Ventana de recarga CívicaPay
const ventanaRecargarCivicaPay = document.getElementById("recargarCivicaPay");

// Abrir ventana de recarga CívicaPay
function abrirVentanaRecargaCivicaPay() {
    ventanaRecargarCivicaPay.classList.remove("hidden");
}

// Cerrar ventana de recarga CívicaPay
function cerrarVentanaRecargaCivicaPay() {
    ventanaRecargarCivicaPay.classList.add("hidden");
}

// Cerrar ventana al dar click afuera
ventanaRecargarCivicaPay.addEventListener("click", (e) => {
    if (e.target === ventanaRecargarCivicaPay) {
        cerrarVentanaRecargaCivicaPay();
    }
})

// Mensaje recarga exitosa
const ventanaRecargaExitosa = document.getElementById("recargaExitosa");

// Abrir y cerrar la ventana despues de un delay de 2s
function abrirVentanaRecargaExitosa() {
    ventanaRecargaExitosa.classList.remove("hidden");
    setTimeout(cerrarVentanaRecargaExitosa, 2000);
}

function cerrarVentanaRecargaExitosa() {
    ventanaRecargaExitosa.classList.add("hidden");
}

// Lógica de creación de usuarios

class User {
    static usuarios = [];

    constructor (nombre, tipo_documento, numero_documento, correo, clave) {
        this.nombre = nombre;
        this.tipo_documento = tipo_documento;
        this.numero_documento = numero_documento;
        this.correo = correo;
        this.clave = clave;
        this.saldo_civica = 0;
        this.saldo_civicapay = 0;
        this.historial_pagos = [];
    }
}

function flujoPrincipal() {
    console.log("Bienvenido! ¿Deseas registrarte o ingresar?");
    console.log("1. Registrarme");
    console.log("2. Ingresar");

    const opcion = window.prompt("Ingresa una opción: ");

    let usuario;

    switch (opcion) {
        case "1":
            usuario = registrarse();
            break;
        case "2":
            usuario = ingresar();
            break
    }

    const bienvenida = document.getElementById("bienvenida");
    const mensajeSaldo = document.getElementById("saldo");

    bienvenida.textContent = `Bienvenido de nuevo, ${usuario.nombre}!`;
    mensajeSaldo.textContent = `$${usuario.saldo_civica}`;


}

function registrarse() {
    const nombre = window.prompt("Ingrese su nombre: ");
    let tipo_documento = window.prompt("Ingrese su tipo de documento: 1. Tarjeta de identidad, 2. Cédula, 3. Cédula extranjera: ");
    switch (tipo_documento) {
        case "1":
            tipo_documento = "Tarjeta de identidad";
            break;
        case "2":
            tipo_documento = "Cédula";
            break;
        case "3":
            tipo_documento = "Cédula extranjera";
            break;
    }
    const numero_documento = window.prompt("Ingrese su numero de documento: ");
    const correo = window.prompt("Ingrese su correo electrónico: ");
    const clave = window.prompt("Ingrese una clave: ");

    const usuario = new User(nombre, tipo_documento, numero_documento, correo, clave);
    User.usuarios.push(usuario);

    return usuario;
}

function ingresar() {
    let tipo_documento = window.prompt("Ingrese su tipo de documento: 1. Tarjeta de identidad, 2. Cédula, 3. Cédula extranjera: ");
    switch (tipo_documento) {
        case "1":
            tipo_documento = "Tarjeta de identidad";
            break;
        case "2":
            tipo_documento = "Cédula";
            break;
        case "3":
            tipo_documento = "Cédula extranjera";
            break;
    }
    const numero_documento = window.prompt("Ingrese su numero de documento: ");
    const clave = window.prompt("Ingrese una clave: ");

    for (user of User.usuarios) {
        if (user.numero_documento === numero_documento) {
            return user;
        } 
    }

    console.log("No se encontró el usuario. Por favor registrese.");
}

flujoPrincipal();