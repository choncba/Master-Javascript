'use strict'

// Programa que pide 2 numeros, evalua sual es mayor o si son iguales
// Verifico que los valores ingresados sean numeros

// var numero1 = parseInt(prompt("Ingrese el número 1",0));  // 0 es el valor por defecto
// var numero2 = parseInt(prompt("Ingrese el número 2",0));  // parseInt se usa por si meten algo que no sea numero  

var numero1 = 0, numero2 = 0;

do{
    numero1 = parseInt(prompt("Ingrese el número 1",0));
    numero2 = parseInt(prompt("Ingrese el número 2",0));
    console.log(numero1, numero2);
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Te dije un número culiá!!!")
    }
}
while(isNaN(numero1) || isNaN(numero2));

if(numero1>numero2){
    alert(numero1 + " es mayor que " + numero2);
}else if(numero1<numero2){
    alert(numero1 + " es menor que " + numero2);
}
else{
    alert(numero1 + " y " + numero2 + " son iguales");
}