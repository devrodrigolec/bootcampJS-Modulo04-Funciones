const numeroTurno = document.getElementById("numeroTurno");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const inputTurnoPersonalizado = document.getElementById("turno-personalizado");
const botonIngresarTurno = document.getElementById("ingresar-turno");
const alertaDiv = document.getElementById("alerta");
let turno: number = 0;

const formatearPrefijo0 = (numero: number): string => {
  return numero.toString().padStart(2, "0");
};

const turnoSiguiente = (): void => {
  if (numeroTurno && numeroTurno instanceof HTMLHeadingElement)
    numeroTurno.innerHTML = formatearPrefijo0(turno + 1);
  turno++;
};

const turnoAnterior = (): void => {
  if (turno === 0) return;
  if (numeroTurno && numeroTurno instanceof HTMLHeadingElement)
    numeroTurno.innerHTML = formatearPrefijo0(turno - 1);
  turno--;
};

const resetTurno = (): void => {
  turno = 0;
  if (numeroTurno && numeroTurno instanceof HTMLHeadingElement)
    numeroTurno.innerHTML = formatearPrefijo0(0);
};

const ingresarTurnoPersonalizado = (): void => {
  if (
    inputTurnoPersonalizado &&
    inputTurnoPersonalizado instanceof HTMLInputElement
  ) {
    if (
      parseInt(inputTurnoPersonalizado.value) < 0 ||
      inputTurnoPersonalizado.value === ""
    ) {
      inputTurnoPersonalizado.value = "";
      if (alertaDiv && alertaDiv instanceof HTMLDivElement) {
        alertaDiv.classList.remove("hidden");
      }
      return;
    }
  }

  if (
    numeroTurno &&
    numeroTurno instanceof HTMLHeadingElement &&
    inputTurnoPersonalizado &&
    inputTurnoPersonalizado instanceof HTMLInputElement
  ) {
    numeroTurno.innerHTML = formatearPrefijo0(
      parseInt(inputTurnoPersonalizado.value)
    );
    if (alertaDiv && alertaDiv instanceof HTMLDivElement) {
      alertaDiv.classList.add("hidden");
    }
    inputTurnoPersonalizado.value = "";
  }
};

const iniciarApp = (): void => {
  if (numeroTurno && numeroTurno instanceof HTMLHeadingElement)
    numeroTurno.innerHTML = formatearPrefijo0(turno);
};

if (botonSiguiente) {
  if (botonSiguiente instanceof HTMLButtonElement) {
    botonSiguiente.addEventListener("click", turnoSiguiente);
  }
}
if (botonAnterior) {
  if (botonAnterior instanceof HTMLButtonElement) {
    botonAnterior.addEventListener("click", turnoAnterior);
  }
}
if (botonReset) {
  if (botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", resetTurno);
  }
}

if (botonIngresarTurno) {
  if (botonIngresarTurno instanceof HTMLButtonElement) {
    botonIngresarTurno.addEventListener("click", ingresarTurnoPersonalizado);
  }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
