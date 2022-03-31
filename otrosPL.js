/* temporizador que agrega 5 minutos */
/* function timer(segundos,minutos){
    segundos
    minutos
    if (segundos==0){
        minutos--
        segundos=60
        console.log(minutos + " minutos ")
        if(minutos==0){
            minutos=5
            console.log(minutos+"minutos if 2")
            timer(segundos,minutos);
        };
    }
    else {

        segundos--
        console.log(minutos+" min  "+segundos+" s ");
    };
    timer(segundos,minutos);
};
timer(60,5); */



//funcion que ordena los numeros 
//de un arreglo mostrando el número mas grander

/* var numeritos=[50,80,300,
8,500,04,8,74];
var resultado=[] */
/* function encontrar(arreglo){
return(Math.max.apply(null,arreglo))
}; */

/* var repeticiones=numeritos.length
function encontrar(){
    for(i=0;i<=10;i++){
        var x=numeritos[i]
        for(o=0;o<=10;o++){
            var y=numeritos[o];
            if(x<y){
                resultado.push(y);
                console.log(x,y)
                console.log(resultado)
            }
        }
    }
};
encontrar(); */


//funcion recursiva que vuelve el primer caracter
//de un string a mayuscula y el ultimo igual.

/* function mayusculas(str){
    let aux=[];

    for(i=0;i<str.length;i++){
        if(i!=0 && str[i]==" "){
            aux.push(str.slice(0,i));
            str=str.slice(i+1);
            i=0;
        }
    }
    aux.push(str);
    for (let i=0;i<aux.length;i++){
        aux[i]=String.fromCharCode(aux[i][0].charCodeAt()-32)+aux[i].slice(1);
    }
    let result=""
    for(let i=0;i<aux.length;i++){
        if(i!=aux.length-1){
            result+=aux[i]+"";
        }
        else{
            result+=aux[i];
        }
    }
    return result;
} */



// secuencia fibonacci

//calcula el numero fibonachi en un posicion especifica
/* function fibonachi(n){
    return n < 2 ? n: fibonachi(n-1)+ fibonachi(n-2);
} */


//hace una lista de la secuencia fibonachi con la cantidad de caracteres especificados
/* function listafib(num){
    for(i=2;i<num;i++){
     console.log(fibonachi(i),i-1)
    };
}; */
/* function contraseña(longitud){
 var cantidad=Math.floor(longitud/3);
 var resultado=""
    for(i=0;i<cantidad;i++){
        //declaramos el rango de letras, simbolos y números que  vamosa utilizar.
     var letras = ["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m",
     "M","n","N","ñ","Ñ","o","O","p","P","q","Q","r","R","s","S","t","T","u","V","w","W","x","X","y","Y","z","Z"];
     var numeros = ["0","1","2","3","4","5","6","7","8","9"];
     var simbolos = [",",".","-","_","}","{","+","¿","?","=",";",":","]","[","*","¡"];
     //hacemos que los eliga aleatoriamente
     var aleatorioLT = parseInt(Math.floor(Math.random()*letras.length));
     var aleatorioNUM = parseInt(Math.floor(Math.random()*numeros.length));
     var aleatorioSIM = parseInt(Math.floor(Math.random()*simbolos.length));
     //unimos el resultado 
     resultado=resultado.concat(letras[aleatorioLT]);
     resultado=resultado.concat(numeros[aleatorioNUM]);
     resultado=resultado.concat(simbolos[aleatorioSIM]);
    };
    
    console.log(resultado)
};
//la manera correcta de hacer este ejercicio era
var numeros="0123456789";
var letras="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var simbolos=",.-{}+'¿;:_[]*¡?=¿"
var todo=numeros+letras+simbolos;
var pureba=""

function generarContras(longitud){
    var contraseña=""
    for(i=0;i<longitud;i++){
        aleatorio=Math.floor(Math.random()*todo.length);
        contraseña+=todo.charAt(aleatorio);
    }
    return console.log(contraseña)
}; */
/* var velita=false
function vela(encendida){
    if(encendida==false){
        console.log("hora de buscar un encendedor")
        console.log("la prende")
        console.log("la voltea")
        console.log("te cambias a movistar?")
        encendida=true
        vela();
    }else{
        console.log("esta encendida wey")
    }
}
vela(velita); */

/* function disminuir(segundos){
    if(segundos==0){
        console.log("he acabado")
    }
    else{
        segundos--
        console.log(segundos)
        disminuir(segundos)
    }
}
disminuir(60) */

/* var puerta=false
function puertita(puerta){
    if(puerta==false){
        console.log("estoy cerrada sempai")
        puerta=true
        console.log("puedes pasar (#_<-)")
        puertita(puerta)
    }
    else{
        console.log("adelante sempai")
    }
}
puertita(puerta) */

/* var tienda=true
var hayZapatos=true
var hayDinero=true
var miTalla=false
function compritas(tienda,hayZapatos,hayDinero,miTalla){
    if(tienda==true){
        if(hayZapatos==true){
            if(hayDinero==true){
                console.log("puedes comprar")
                if(miTalla==true){
                    console.log("callate y toma mi dinero")
                }else{
                    console.log("pa ni mierda sirven")
                }
            }else{
                console.log("puedes ver peron no tocar")
            }
        }else{
            console.log("somos una tienda pobre no se puede wey")
        }
    }else{
        console.log("vuelve cuando estemos abiertos")
    }
};
compritas(tienda,hayZapatos,hayDinero,miTalla); */

/* var loly=20

function esLegal(loly){
    if(loly<=18){
        console.log("*te va a caer la chonta no es legal esa loly")
    }else{
        console.log("se ve mal, esta rico pero esta mal")
    }
}
esLegal(loly) */