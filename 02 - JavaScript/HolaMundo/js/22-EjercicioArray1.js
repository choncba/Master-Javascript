'use strict'

// Pide 6 numeros por pantalla y los ingresa a un array
// Muestro el array completo en el cuerpo de la web y la consola
// Ordenar el array y mostrarlo
// Invertir el orden y mostrarlo
// Mostrar cuantos elementos tiene
// Hacer la busqueda de un valor introducido por el usuario y que indique si esta en el array y la posición

var array = [];
// Tambien:
//var array = new Array(6); // Asi lo declaro como objeto e indico que tiene 6 elementos

for(let i=0;i<6;i++){
    array.push(parseInt(prompt("Ingrese un numero:",0)));
}

console.log("Array ingresado: " + array);
document.write("<h1>Array Ingresado:</h1>");
document.write(array);
// Tambien
array.forEach(i => document.write("<strong>" + i + "</strong><br>"));

array.sort();
console.log("Array Ordenado: " + array);
document.write("<h2>Array ordenado:</h2>");
document.write(array);

array.reverse();
console.log("Array Invertido: " + array);
document.write("<h2>Array Invertido:</h2>");
document.write(array);

console.log("Tiene " + array.length + " elementos");
document.write("<br><br>Tiene " + array.length + " elementos");

var busqueda = parseInt(prompt("Ingrese un numero a buscar",0));
var indice = array.findIndex(i => i===busqueda);

if(indice >= 0){
    console.log("Valor " + busqueda + " encontrado en la posicion " + indice);
    document.write("<br><br>Valor " + busqueda + " encontrado en la posicion " + indice);
}
else{
    console.log("Valor " + busqueda + " NO encontrado");
    document.write("<br><br>Valor " + busqueda + " NO encontrado");
}