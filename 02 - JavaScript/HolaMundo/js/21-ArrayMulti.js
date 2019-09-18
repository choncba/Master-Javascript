'use strict'

var numeros = [1, 2, 3, 4, 5, 6];
var letras = ["a", "b", "c", "d", "e"];
var matriz = [numeros,letras];

numeros.unshift(12);    // Añade '12' al principio del array - arr.unshift(elemento1[, ...[, elementoN]])
numeros.push(33);       // Añade '33' al final del array - arr.push(element1[, ...[, elementN]])

numeros.shift();    // Elimina el primer elemento del array
numeros.pop();      // Elimina el ultimo elemento del array

// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

console.log(letras);
letras.splice(letras.indexOf("c"), 1); // Elimina 1 elemento del array, desde el indice de 'c'

console.log(letras);
letras.splice(letras.indexOf("d"), 0, "c"); // Inserta 'c' en el indice apuntado por 'd'

console.log(letras);
letras.splice(letras.indexOf("d"), 1, "c"); // Reemplaza 'd' por 'c' en el indice apuntado por 'd' 

console.log(letras);

// Convierte un array en un string con los elementos separados por coma
var array_a_string = letras.join();
console.log(array_a_string);

var array_a_string = letras.join('');   // Sin la Coma
console.log(array_a_string);

var array_a_string = letras.join('-/-/-');  // con lo que se me cante
console.log(array_a_string);

// Convertir texto en array
var texto = "Hola, como, estas, yo, bien";
var string_a_array = texto.split(', ');
console.log(string_a_array);

// Ordenar arrays
letras = ["c", "d", "a", "e", "b"];
console.log(letras);
letras.sort();          // Ordena por orden alfabetico el array
                        // Se puede agregar una funcion dentro de sort para hacer un ordenamiento personalizado
                        // ver https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
console.log(letras);

letras.reverse();          // Invierte los elementos del array sin ordenarlos
console.log(letras);