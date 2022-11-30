let estadoLicuadora = "apagado";

let sonidoLicuadora = document.querySelector("#licuadora-sonido");
let sonidoBoton = document.querySelector("#licuadora-boton-sonido");

let licuadora = document.querySelector("#licuadora");
let boton = document.querySelector("#licuadora-boton");

const controlarLicuadora = () => {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    hacerRuidillo();
    licuadora.classList.add("licuadora-activa");
  } else {
    estadoLicuadora = "apagado";
    hacerRuidillo();
    licuadora.classList.remove("licuadora-activa");
  }
};

const hacerRuidillo = () => {
  if (sonidoLicuadora.paused) {
    sonidoBoton.play();
    sonidoLicuadora.play();
  } else {
    sonidoBoton.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
};

boton.addEventListener("click", () => controlarLicuadora());
