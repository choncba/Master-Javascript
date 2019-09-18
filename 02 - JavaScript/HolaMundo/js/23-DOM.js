'use strict'

// DOM - Document Object Model
// Buscar elementos por ID único
var caja = document.getElementById("mi_caja");
console.log(caja);  //-> Devuelve NULL si cargo el script antes del <body> en el html, debo hacerlo al final
                    // Devuelve: <div id="mi_caja">Hola</div>
console.log(caja.innerHTML);  // Devuelve: Hola
caja.innerHTML = "Chau!"; // Cambia el texto dentro del div
caja.style.background = "red";
// Otra forma de seleccionar elementos es querySelector
var caja2 = document.querySelector("#mi_caja"); // Como en CSS, # selecciona un id
                                                // querySelector selecciona solo un elemento a la vez
                                                // querySelectorAll selecciona todos los elementos

// Buscar elementos por su etiqueta:
var TodosLosDiv = document.getElementsByTagName("div");
console.log(TodosLosDiv);   // Nos devuelve un array con todos los <div>
TodosLosDiv[2].innerHTML = "Ahora te cambio"; // Cambia el texto del elemento del indice 2 del array

