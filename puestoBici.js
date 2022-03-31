var usuario="jeremy";
var casillero=Math.floor(Math.random()*10);
var fehca = new Date();
console.log("cobraremos 0.0833 Quetzales por segundo ");

function tiempo(){
    var horas = fehca.getHours()-12;
    var minutos =fehca.getMinutes();
    var segundos = fehca.getSeconds();
    return console.log(horas +"H:"+  minutos +"M:"+ segundos+"s");
};
function fecha(){
    var diasDeLaSemana = fehca.getDay();
    var diaDelMes =fehca.getDate();
    var mes = fehca.getMonth();
    var año = fehca.getFullYear();
    var dia = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],
        Mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var dias = dia[diasDeLaSemana]
    var meses = Mes[mes]
    return console.log(dias,diaDelMes +" de "+ meses +" del "+ año);
};
function timer(){
    cobroM=(fehca.getMinutes()*60);
cobroS=fehca.getSeconds();
cobroH=fehca.getHours()*60*60;
return(cobroM+cobroS+cobroH)
}
function registroEntrada(){
console.log("la bicicleta fue registrada en el casillero "+ casillero+
" por el suario "+usuario+" a las ");
tiempo();
fecha();
timer();

return(timer());
};
function registroSalida(tiempo1){
console.log("la bicicleta fue retirada del casillero "+ casillero+
" por el suario "+usuario+" a las " );
tiempo();
fecha();
var numeros=timer();
console.log("el monto a pagar es de "+ (numeros- tiempo1)*0.00833);
console.log("el casillero numero: " + casillero + " está disponible")
};
registroSalida(registroEntrada());
/* var botonEntregar=document.getElementById("ingreso");
var botonIngresar=document.getElementById("salida");
var entregarP=document.getElementById("entrada");
var ingresarP=document.getElementById("egreso");

botonIngresar.addEventListener("click",registroSalida(registroEntrada())); */