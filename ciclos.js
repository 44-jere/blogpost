var escribir = document.getElementById("resultado");
var botton = document.getElementById("boton");
var caja = document.getElementById("operacion");
botton.addEventListener("click",multiplicar);


function multiplicar (){
var tabal= parseInt(caja.value);
for (i = 0; i<=10; i++ ){
escribir.innerHTML +=tabal + (" x ") + i + ("= ") + i*tabal + ("<br/>");
"<br>"
}};
