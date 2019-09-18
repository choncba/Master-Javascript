'use strict'

// Funciones

function calculadora(numero1, numero2, mostrar = false){    // Mostrar es un parametro opcional
    console.log(numero1 + " + " + numero2 + " = " + numero1+numero2);
    console.log(numero1 + " - " + numero2 + " = " + (numero1-numero2));
    console.log(numero1 + " x " + numero2 + " = " + numero1*numero2);
    console.log(numero1 + " / " + numero2 + " = " + numero1/numero2);
}

calculadora(prompt("Primer valor",0), prompt("Segundo valor",1)); // No es necesario pasar todos los parametros