const ventanaRegistrarse = document.getElementById("ventanaRegistrarse");
const ventanaIngresar = document.getElementById("ventanaIngresar");

function mostrarVentanaIngreso() {
    const ingreso = document.getElementById("ingreso");
    const registro = document.getElementById("registro");

    ingreso.classList.remove("hidden");
    registro.classList.add("hidden");

    ventanaIngresar.classList.add("border-b-2");
    ventanaIngresar.classList.add("border-[#06D6A0]");

    ventanaRegistrarse.classList.remove("border-b-2");
    ventanaRegistrarse.classList.remove("border-[#06D6A0]");
}

function mostrarVentanaRegistro() {
    const ingreso = document.getElementById("ingreso");
    const registro = document.getElementById("registro");

    ingreso.classList.add("hidden");
    registro.classList.remove("hidden");

    ventanaRegistrarse.classList.add("border-b-2");
    ventanaRegistrarse.classList.add("border-[#06D6A0]");

    ventanaIngresar.classList.remove("border-b-2");
    ventanaIngresar.classList.remove("border-[#06D6A0]");
}

ventanaRegistrarse.addEventListener("click", mostrarVentanaRegistro);
ventanaIngresar.addEventListener("click", mostrarVentanaIngreso);