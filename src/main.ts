const numeroTurno = document.getElementById("numeroTurno");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const inputTurnoPersonalizado = document.getElementById(  
  "turno-personalizado"
) as HTMLInputElement;
const botonIngresarTurno = document.getElementById("ingresar-turno");
const alertaDiv = document.getElementById('alerta');
let turno: number = 0;

const formatearPrefijo0 = (numero: number): string => {
  if (numero.toString().length < 2) {
    return `0${numero}`;
  }
  return numero.toString();
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

const generarAlertaTurnoInválido = () => {
  alertaDiv?.classList.remove('hidden');
  setTimeout(() => {
    alertaDiv?.classList.add('hidden');
  },5000)
}

const ingresarTurnoPersonalizado = (): void => {
  /* Esto lo comento porque en una pantalla de turno normal, si se ingresa un turno personalizado es para llamar a alguien que perdió su turno y este ya pasó, pero luego el operario debe continuar con el turno que se quedó anteriormente. Por eso no igualo la cuenta del turno al turno personalizado, para que cuando el operario haga click en siguiente, continue donde se quedó. */
  /* turno = parseInt(inputTurnoPersonalizado.value); */
  if (parseInt(inputTurnoPersonalizado.value) < 0 || inputTurnoPersonalizado.value === '' ) {
    
    inputTurnoPersonalizado.value = "";
    generarAlertaTurnoInválido()
    return;
  }
  if (numeroTurno !== undefined && numeroTurno !== null) {
    numeroTurno.innerHTML = formatearPrefijo0(
      parseInt(inputTurnoPersonalizado.value)
    );
    inputTurnoPersonalizado.value = "";
  }
};

if (numeroTurno !== undefined && numeroTurno !== null)
  numeroTurno.innerHTML = formatearPrefijo0(turno);

if (botonSiguiente !== null && botonSiguiente !== undefined)
  botonSiguiente.addEventListener("click", turnoSiguiente);
if (botonAnterior !== null && botonAnterior !== undefined)
  botonAnterior.addEventListener("click", turnoAnterior);
if (botonReset !== null && botonReset !== undefined)
  botonReset.addEventListener("click", resetTurno);

if (botonIngresarTurno !== null && botonIngresarTurno !== undefined)
  botonIngresarTurno.addEventListener("click", ingresarTurnoPersonalizado);
