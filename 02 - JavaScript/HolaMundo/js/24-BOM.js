'use strict'

// BOM - Browser Object Model - Todas las funciones del navegador pueden invocarse desde javascript
console.log(window.innerHeight);    //--> Nos devuelve el valor de la altura de la ventana del navegador
console.log(window.innerWidth);     //--> Nos devuelve el valor del ancho de la ventana del navegador

console.log(screen.height);    //--> Nos devuelve el valor de la altura de la pantalla del dispositivo
console.log(screen.width);     //--> Nos devuelve el valor del ancho de la pantalla del dispositivo

console.log(window.location);   // Muestra la información de la web 
                                // Hay muchas propiedades de window https://www.w3schools.com/jsref/obj_window.asp

function AbrirVentana(url){     // Abre una nueva pestaña en el navegador con la url pasada como argumento
    window.open(url);
}