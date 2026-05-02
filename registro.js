const botonRegistrarse = document.getElementById("botonRegistrarse");
const botonIngresar = document.getElementById("botonIngresar");

const ventanaRegistro = document.getElementById("ventanaRegistro");
const ventanaIngreso = document.getElementById("ventanaIngreso");

function mostrarVentanaRegistro() {
    botonRegistrarse.classList.add("border-b-2");
    botonRegistrarse.classList.add("border-[#06D6A0]");
    botonRegistrarse.classList.add("font-bold");

    botonIngresar.classList.remove("border-b-2");
    botonIngresar.classList.remove("border-[#06D6A0]");
    botonIngresar.classList.remove("font-bold");

    ventanaRegistro.classList.remove("hidden");
    ventanaIngreso.classList.add("hidden");
}

function mostrarVentanaIngreso() {
    botonIngresar.classList.add("border-b-2");
    botonIngresar.classList.add("border-[#06D6A0]");
    botonIngresar.classList.add("font-bold");

    botonRegistrarse.classList.remove("border-b-2");
    botonRegistrarse.classList.remove("border-[#06D6A0]");
    botonRegistrarse.classList.remove("font-bold");

    ventanaIngreso.classList.remove("hidden");
    ventanaRegistro.classList.add("hidden");
}

botonRegistrarse.addEventListener("click", mostrarVentanaRegistro);
botonIngresar.addEventListener("click", mostrarVentanaIngreso);

// Lógica para el acceso y creación de usuarios

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

function buscarUsuario(documento) {
    const busqueda = User.usuarios.filter((usuario) => usuario.numero_documento === documento)
    if (busqueda.length > 0) {
        return [true, busqueda[0]];
    }
    return [false, null];
}

function limpiarCamposRegistro() {
    nombre_usuario.value = "";
    tipo_doc_registro.selectedIndex = 0;
    num_doc_registro.value = "";
    correo_registro.value = "";
    clave_registro.value = "";
}

function limpiarCamposIngreso() {
    tipo_doc_ingreso.selectedIndex = 0;
    num_doc_ingreso.value = "";
    clave_ingreso.value = "";
}

function mostrarAdvertenciaRegistro(mensaje) {
    contenedor_advertencia_registro.classList.remove("hidden");
    mensaje_advertencia_registro.textContent = mensaje;

    clearTimeout(mensaje_registro_ID);

    mensaje_registro_ID = setTimeout(() => {
        contenedor_advertencia_registro.classList.add("hidden");
        mensaje_advertencia_registro.textContent = "";
    }, 2000);
}

function mostrarAdvertenciaIngreso(mensaje) {
    contenedor_advertencia_ingreso.classList.remove("hidden");
    mensaje_advertencia_ingreso.textContent = mensaje;

    clearTimeout(mensaje_ingreso_ID);

    mensaje_ingreso_ID = setTimeout(() => {
        contenedor_advertencia_ingreso.classList.add("hidden");
        mensaje_advertencia_ingreso.textContent = "";
    }, 2000);
}

function registrarse() {
    const nombre = nombre_usuario.value;
    const tipo_documento = tipo_doc_registro.value;
    const numero_documento = num_doc_registro.value;
    const correo = correo_registro.value;
    const clave = clave_registro.value;

    const [existe_usuario] = buscarUsuario(numero_documento);

    if (nombre === "" || tipo_documento === "" || numero_documento === "" || correo === "" || clave === "") {
        mostrarAdvertenciaRegistro("Debe rellenar todos los campos para continuar!");
    } else if (existe_usuario){
        mostrarAdvertenciaRegistro("Este usuario ya está registrado!");
        limpiarCamposRegistro();
    } else {
        const usuario = new User(nombre, tipo_documento, numero_documento, correo, clave);
        User.usuarios.push(usuario);
        limpiarCamposRegistro();
        usuario_elegido = usuario;

        window.location.replace("index.html");
    }
}

function ingresar() {
    const tipo_documento = tipo_doc_ingreso.value;
    const numero_documento = num_doc_ingreso.value;
    const clave = clave_ingreso.value;

    const [existe_usuario, usuario] = buscarUsuario(numero_documento);

    if (tipo_documento === "" || numero_documento === "" || clave === "") {
        mostrarAdvertenciaIngreso("Debe rellenar todos los campos para continuar!");
    } else if (!existe_usuario) {
        mostrarAdvertenciaIngreso("Debe registrarse primero!");
        limpiarCamposIngreso();
    } else {
        limpiarCamposIngreso();
        usuario_elegido = usuario;
        window.location.replace("index.html");
    }
}

// Avisos del formulario
const contenedor_advertencia_registro = document.getElementById("contenedor_advertencia_registro");
const mensaje_advertencia_registro = document.getElementById("mensaje_advertencia_registro");

const contenedor_advertencia_ingreso = document.getElementById("contenedor_advertencia_ingreso");
const mensaje_advertencia_ingreso = document.getElementById("mensaje_advertencia_ingreso");

let mensaje_registro_ID;
let mensaje_ingreso_ID;

// Datos del formulario registro
const nombre_usuario = document.getElementById("nombre_usuario");
const tipo_doc_registro = document.getElementById("tipo_doc_registro");
const num_doc_registro = document.getElementById("num_doc_registro");
const correo_registro = document.getElementById("correo_registro");
const clave_registro = document.getElementById("clave_registro");

// Datos del formulario ingreso
const tipo_doc_ingreso = document.getElementById("tipo_doc_ingreso");
const num_doc_ingreso = document.getElementById("num_doc_ingreso");
const clave_ingreso = document.getElementById("clave_ingreso");

// Despues de acceder, el usuario elegido se pasará a la proxima ventana para interactuar con sus funciones
let usuario_elegido;
