function iniciarPreguntasYRespuestas() {
  let botonUno = document.getElementById("boton-uno");
  botonUno.addEventListener("click", comoSeConocieron);
  let botonDos = document.getElementById("boton-dos");
  botonDos.addEventListener("click", enQueMesSalieron);
  let botonTres = document.getElementById("boton-tres");
  botonTres.addEventListener("click", queEdadTenian);
}

function comoSeConocieron() {
  alert("En una fiesta de la universidad");
}

function enQueMesSalieron() {
  alert("Salieron en octubre");
}

function queEdadTenian() {
  alert("Ambos tenian 21");
}
window.addEventListener("load", iniciarPreguntasYRespuestas);
