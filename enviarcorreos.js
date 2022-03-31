var numero=0
var direcciones=["carlos","jenny","jefry","wilson","jeremy","raul","courly","elda","megan","morgana",]
function correos(){

if (numero<=10){
   
    var envios=direcciones[numero]
    console.log("Hola " +envios+"@gmail.com"+ " este es un correo masivo ");
    numero++
    correos();
}
else{
    console.log("listo jefe")
}

}
correos();