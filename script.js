function saludo() {
  alert("Hola Mundo");
  var nombre = prompt("Ingrese su nombre: ");
  alert("Hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function(){
  saludo();
});

function despedida() {
  var dia = prompt("Ingrese el dia correspondiente: ");
  alert("Gracias por visitarnos hoy " + dia);
}

var Acercade = document.getElementsByClassName("link")[1];

Acercade.addEventListener("click", function(){
  despedida();
});