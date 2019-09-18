'use strict'

// Trabajar con fecha/hora
var fecha = new Date();
console.log(fecha);

var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDay();

var texto_hora = `
    El año es: ${year}\n
    El mes es: ${month}\n
    El día es : ${day}\n 
`;

console.log(texto_hora);

// Trabajar con funciones matematicas:
// ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math
// Ver: https://www.w3schools.com/js/js_math.asp

console.log("Constante PI: " + Math.PI);

var radio = 5;
var area = 2 * Math.PI * Math.pow(radio,2);
console.log("El area del círculo de radio " + radio + " es: " + area);