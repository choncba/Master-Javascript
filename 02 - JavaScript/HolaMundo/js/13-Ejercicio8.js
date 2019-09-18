'use strict'

// Realizar todas las operaciones matematicas posibles entre 2 numeros ingresados y mostrarlo en un alert,
// en la pagina, y en la consola

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

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = 0;
if(numero2 != 0){
    division = numero1 / numero2;
}

var resultadoWeb =  numero1 + " + " + numero2 + " = " + suma + "<br>" +
                    numero1 + " - " + numero2 + " = " + resta + "<br>" +       
                    numero1 + " x " + numero2 + " = " + multiplicacion + "<br>" +
                    numero1 + " / " + numero2 + " = " + division + "<br>";

var resultadoconsola =  numero1 + " + " + numero2 + " = " + suma + "\n" +
                    numero1 + " - " + numero2 + " = " + resta + "\n" +       
                    numero1 + " x " + numero2 + " = " + multiplicacion + "\n" +
                    numero1 + " / " + numero2 + " = " + division + "\n";

document.writeln(resultadoWeb);
alert(resultadoconsola);
console.log(resultadoconsola);

