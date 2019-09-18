'use strict'

// Arrays

var datos = ["Juan Perez", 0 , true, "Pepa Pig"];   // Acepta cualquier tipo de datos
var lenguajes = new Array("PHP", "Java", "Phyton"); // definido como objeto

var longitud_datos = datos.length;  // Longitud del array

// Mostramos una lista con los lenguages:
document.write("<h1>Lenguajes:</h1><br><ul>");

// Forma estandard:
// for(var i = 0; i<lenguajes.length;i++){
//     document.write("<li>"+lenguajes[i]+"</li>");
// }

// Con foreach, recorre el array asignando a 'elemento' cada elemento del array mientras avanza el indice.
// Ejecuta el código entre llaves para cada indice
lenguajes.forEach((elemento, indice, arreglo)=>{document.write("<li>"+elemento+"</li>");});
// elemento: Se le asigna el valor del array para cada indice
// indice: indice del array
// arreglo: copia del array completo

// Tambien puedo poner simplemente 
// lenguajes.forEach(i=>{document.write("<li>"+i+"</li>");}); // i toma el valor del elemento del array para cada indice

// Otra forma es con for in
for(let i in lenguajes){
    document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</ul>");

// Busquedas en arrays
var busqueda = lenguajes.find(function(lenguaje){   // Utilizo la funcion find, y una funcion anonima que
    return lenguaje == "PHP";                       // realiza la comparacion de prueba
});

// Reducido:
var busqueda_reducido = lenguajes.find(i => i=="PHP");

// Otro ejemplo:
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(element => element>10);
console.log(found);

// findIndex nos devuelve el indice del valor buscado si lo encuentra
busqueda = lenguajes.findIndex(i => i=="PHP");

// some - devuelve true si encuentra un elemento con la caracteristica buscada
busqueda = array1.some(numero => numero > 10);






