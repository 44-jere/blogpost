let segundos=60;
let minutos=1
function timer(){
if(segundos==0 && minutos>0){
    segundos=59
    minutos--
}
if(segundos>0){
    segundos--
}
console.log(minutos,segundos)
}
setInterval(timer,400)