    if(repeticiones>=0){
        repeticiones--
        var x=numeritos[repeticiones];
        var y=numeritos[repeticiones+1];
        if(x>y){
            console.log("x>y " +x,y);
            resultado.push(x);
        }
        if(x<y){
            console.log("x<y "+y,x);
            resultado.unshift(x);
            resultado.shift();
        }
        var numMax=resultado.length
        console.log(resultado)
        encontrar();
    }
    else{
        console.log("he terminado")

    }