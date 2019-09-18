'use strict'

// Metodos para transformar cadenas
var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "está bueno";

var numero_en_texto = numero.toString();    // Convierte a String
var mayusculas = texto1.toUpperCase();      // Convierte a mayusculas
var minusculas = texto1.toLowerCase();      // Convierte a minusculas
var longitud = texto1.length;               // Longitud de la cadena
var concatenar = texto1 + texto2;           // Concatena las cadenas
concatenar = texto1.concat(texto2);         // Es igual al anterior

// Busquedas
var Busqueda = texto1.indexOf("curso");     // Nos devuelve el indice de la primer coincidencia si encuentra la palabra
Busqueda = texto1.search("curso");          // Similar a indexOf
Busqueda = texto1.lastIndexOf("curso");     // Nos devuelve el indice de la última coincidencia si encuentra la palabra

Busqueda = texto1.match("curso");           // Devuelve un array con información sobre las palabraas encontradas con un REGEX
                                            // Ver https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/match
texto1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var expresion = /[A-E]/;                    // Devuelve sólo A
Busqueda = texto1.match(expresion);
console.log(Busqueda);
var expresion = /[A-E]/g;                   // usando el flag g (global) Devuelve ["A", "B", "C", "D", "E"]
Busqueda = texto1.match(expresion);
console.log(Busqueda);
var expresion = /[A-E]/gi;                   // usando el flag g (global) e i (ignore case) Devuelve ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]
Busqueda = texto1.match(expresion);
console.log(Busqueda);

// Substring
Busqueda = texto1.substr(2,7);  // extrae un substring desde el indice 2 al 7
Busqueda = texto1.charAt(10);   // extrae el caracter del indice 10
Busqueda = texto1.startsWith("Buenvenido"); // true si encuentra esta palabra al inicio / false si no
Busqueda = texto1.endsWith("cualquiera");   // true si finaliza con el string buscado
Busqueda = texto1.includes("curso");        // true si existe la palabra buscada

// Reemplazar texto
Busqueda = texto1.replace("al", "les");     // Busca "al", si lo encuentra lo reemplaza con "les"
Busqueda = texto1.slice(14);                // Devuelve un substring desde el indice 14 de texto1
Busqueda = texto1.slice(14,22);             // Desde el indice 14 al 22
Busqueda = texto1.split(" ");               // Devuelve un array cuyo cada elemento es una palabra de texto1 separada por espacio
                                            // Puedo usar cualquier separador
Busqueda = texto1.trim();                   // Elimina los espacios anteriores y posteriores del string                                
