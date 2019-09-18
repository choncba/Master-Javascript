'use strict'

// Ejercicio 2: calcular la media y la suma de los numeros ingresados hasta ingresar un numero negativo, 
// luego el resultado

var numero = 0, suma = 0, media = 0, cantidad = 1;

do{
    numero = parseInt(prompt("Ingrese un número, negativo para terminar",0));
    if(!isNaN(numero) && numero > 0){
        suma += numero;
        media = suma/cantidad;
        cantidad++;
        alert("Suma: " + suma + ", Media: " + media + ", num. ingresados: " + (cantidad-1));
    }

}while(!isNaN(numero) && numero > 0);

console.log("Suma: " + suma + ", Media: " + media + ", num. ingresados: " + (cantidad-1));