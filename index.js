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