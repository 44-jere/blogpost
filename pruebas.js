var capacidadPasajeros = 0
var fehca = new Date();
var origen = "Guatemala";
var destino = "Dubai";
var cliente = "Jeremy Bryan Icó Herrera";
var bus=0;

function tiempo(){
var horas = fehca.getHours()-12;
var minutos =fehca.getMinutes();
var segundos = fehca.getSeconds();
return console.log(horas +"H:"+  minutos +"M:"+ segundos+"s");
}

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
}

function imprimir(vehiculo){
       capacidadPasajeros++
       console.log("Bienvendio al aeropuerto de "+ origen + " Eres el pasajero " + cliente + ", con destino a " + destino + 
       ", usted se estara movilizando en " +  vehiculo + 
       ", su numero de tiket es el " + capacidadPasajeros + 
       " la fecha y la hora de hoy es ");
       fecha();
       tiempo();

}

darTikets("avion",2)
function darTikets(vehiculo,tt){
    if (capacidadPasajeros <= tt-1){
            imprimir(vehiculo);
        darTikets(vehiculo,tt);
    }
    else{
        console.log("no tenemos suficientes acientos ◑﹏◐");
    }
};

