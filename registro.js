const ventanaRegistrarse = document.getElementById("ventanaRegistrarse");
const ventanaIngresar = document.getElementById("ventanaIngresar");

function mostrarVentanaIngreso() {
    const ingreso = document.getElementById("ingreso");
    const registro = document.getElementById("registro");
    ingreso.classList.remove("hidden");
    registro.classList.add("hidden");
}

function mostrarVentanaRegistro() {
    const ingreso = document.getElementById("ingreso");
    const registro = document.getElementById("registro");
    ingreso.classList.add("hidden");
    registro.classList.remove("hidden");
}

ventanaRegistrarse.addEventListener("click", mostrarVentanaRegistro);
ventanaIngresar.addEventListener("click", mostrarVentanaIngreso);