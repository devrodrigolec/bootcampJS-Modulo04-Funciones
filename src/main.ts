const numeroTurno = document.getElementById("numeroTurno");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const inputTurnoPersonalizado = document.getElementById(
  "turno-personalizado"
) as HTMLInputElement;
const botonIngresarTurno = document.getElementById("ingresar-turno");
const alertaDiv = document.getElementById("alerta");
let turno: number = 0;

const formatearPrefijo0 = (numero: number): string => {
  return numero.toString().padStart(2, "0");
};

const turnoSiguiente = (): void => {
  if (numeroTurno !== null && numeroTurno !== undefined)
    numeroTurno.innerHTML = formatearPrefijo0(turno + 1);
  turno++;
};

const turnoAnterior = (): void => {
  if (turno === 0) return;
  if (numeroTurno !== null && numeroTurno !== undefined)
    numeroTurno.innerHTML = formatearPrefijo0(turno - 1);
  turno--;
};

const resetTurno = (): void => {
  turno = 0;
  if (numeroTurno !== null && numeroTurno !== undefined)
    numeroTurno.innerHTML = formatearPrefijo0(0);
};

const ingresarTurnoPersonalizado = (): void => {
  if (
    parseInt(inputTurnoPersonalizado.value) < 0 ||
    inputTurnoPersonalizado.value === ""
  ) {
    inputTurnoPersonalizado.value = "";
    alertaDiv?.classList.remove("hidden");
    return;
  }
  if (numeroTurno !== undefined && numeroTurno !== null) {
    numeroTurno.innerHTML = formatearPrefijo0(
      parseInt(inputTurnoPersonalizado.value)
    );
    alertaDiv?.classList.add("hidden");
    inputTurnoPersonalizado.value = "";
  }
};

if (numeroTurno !== undefined && numeroTurno !== null)
  numeroTurno.innerHTML = formatearPrefijo0(turno);

if (botonSiguiente !== null && botonSiguiente !== undefined) {
  if (botonSiguiente instanceof HTMLButtonElement) {
    botonSiguiente.addEventListener("click", turnoSiguiente);
  }
}
if (botonAnterior !== null && botonAnterior !== undefined) {
  if (botonAnterior instanceof HTMLButtonElement) {
    botonAnterior.addEventListener("click", turnoAnterior);
  }
}
if (botonReset !== null && botonReset !== undefined) {
  if (botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", resetTurno);
  }
}

if (botonIngresarTurno !== null && botonIngresarTurno !== undefined) {
  if (botonIngresarTurno instanceof HTMLButtonElement) {
    botonIngresarTurno.addEventListener("click", ingresarTurnoPersonalizado);
  }
}
