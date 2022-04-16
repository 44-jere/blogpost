var fehca = new Date();
var mesa="uno";
var cliente="Fernando";
var pedido=["cerdo","papas","pepsi","fresco","cabiar","chicharron","pollo ahumado","res","caldo","salchicas"];

var numeros=pedido.length

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
function tiempo(){
    var horas = fehca.getHours()-12;
    var minutos =fehca.getMinutes();
    var segundos = fehca.getSeconds();
    return console.log(horas +"H:"+  minutos +"M:"+ segundos+"s");
};
console.log("La mesa "+ mesa+ " con el comensal "+cliente+ " ha ordenado: ");
function despacho(){
    var cantidadPedido=Math.floor(Math.random()*10)
if (numeros>=0){
    numeros--
    console.log(cantidadPedido +" de "+ pedido[numeros]);
    despacho();
}
else{
    fecha();
    tiempo();
}
};
despacho();