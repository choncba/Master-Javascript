'use strict'

// Operadores y tipos de datos
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
alert("El resultado de numero1 + numero2 es " + operacion);

var operacion = numero1 - numero2;
alert("El resultado de numero1 - numero2 es " + operacion);

var operacion = numero1 * numero2;
alert("El resultado de numero1 * numero2 es " + operacion);

// Tipos de datos
var numero_entero = 44;
var cadena_de_texto = 'Hola, "que" tal'; // la comilla simple tiene prioridad
var booleano = true;

var numero_falso = "33"; // String
console.log(numero_falso + 7);              // Convierte 7 a texto y concatena
console.log(Number(numero_falso) + 7);      // La funcion Number convierte el string en el numero 33
console.log(parseInt(numero_falso) + 7);
console.log(parseFloat(numero_falso) + 7);

console.log(typeof numero_entero);      // typeof devuelve el tipo de variable
console.log(typeof cadena_de_texto);