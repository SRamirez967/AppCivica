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

