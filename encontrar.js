/* var multiplicados = 24 ;
var restados = 2 ;
var sumados = 24 ;
var x1 = [];
var x2 = [];
var sumx1 = 0;
var sumx2 = 0;

for (i=sumados;i>=1;i--)
{
    x1.push(i);
}
for (x=1;x<=sumados;x++)
{
    x2.push(x);
}
console.log(x1,x2)

for (e=0; e < x1.length; e++){
    sumx1 = x2[e] * x1[e]
    console.log(x2[e] , x1[e])
    if (x2[e] * x1[e]==multiplicados){
        document.write(" lo encontre "+ x2[e]);
    }
} */
var primos = 36
var restSum = 5
var cantidadFactores=100
var cantidadDeTablas=100
let encontrarDosNums=true
if(encontrarDosNums=false){
for(i=1;i<=cantidadFactores;i++)
{
for (o=1;o<=cantidadDeTablas;o++)
{
if ((i*i)+(o*o)==primos)
{
    document.write(i + " al cuadrado por "  , o+" al cuadrado " + "</br>")
}
if(((i*i)/i)+(o*o)==primos){
    document.write(" raiz de "+i + " por "  , o+" al cuadrado "  + "</br>")
}
}
}}
else{
        for(i=1;i<=cantidadFactores;i++)
        {
            for (o=1;o<=cantidadDeTablas;o++)
            {
                if (i*o==primos ^ i+o ==restSum)
                {
                document.write(i + " por "  , o + " = " + (i*o) +" y "+i + " mas "  , o + " = "+ (i+o) + "</br>")
                }
            }
        }
}