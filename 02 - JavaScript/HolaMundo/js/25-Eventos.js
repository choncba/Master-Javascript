'use strict'

// Eventos del mouse

// Llamo esta funcion desde el HTML con el evento onclick:
// <button id="boton" onclick='cambiaColor(this.id)'>Boton</button>

function cambiaColor(id){
    var elemento = document.getElementById(id);
    var color = elemento.style.backgroundColor;
    console.log(color);

    if(color == "red"){
        elemento.style.backgroundColor = "blue";
    }
    else{
        elemento.style.backgroundColor = "red";
    }
}

// Pero "ensucia" el HTML, una mejor manera:
var boton = document.querySelector("#boton");

boton.addEventListener("click", function(){     // Captura el evento click y ejecuta la funcion de callback
    cambiaColor(boton.id);
    // También usando this:
    // cambiaColor(this.id);
});

// Otros eventos: https://www.w3schools.com/jsref/dom_obj_event.asp

// Eventos del teclado
var entrada = document.querySelector("#formulario");    // Capturo el objeto con id "formulario"
// Focus
entrada.addEventListener('focus',function(){
    console.log("[Focus] Estas en el input");   // Se ejecuta cada vez que seleccione el input para ingresar texto
});
// Blur
entrada.addEventListener('blur',function(){
    console.log("[Blur] Estas fuera del input");   // Se ejecuta cada vez que deseleccione el input
});
// Keydown - Presiono una tecla - TODAS, incluso las que no generan caracteres
entrada.addEventListener('keydown',function(event){
    console.log("[Keydown] Estas presionando: " + event.key);   // Nos indica que tecla estamos presionando
});
// Keypress - Presiono una tecla - SOLO las que generan caracteres
entrada.addEventListener('keypress',function(event){
    console.log("[Keypress] Estas presionando: " + event.key);   // Nos indica que tecla estamos liberando
});
// Keyup - Libero una tecla
entrada.addEventListener('keyup',function(event){
    console.log("[Keyup] Liberaste: " + event.key);   // Nos indica que tecla estamos liberando
});

// Evento onload - Sirve para indicar ejecutar algo luego de cargar el DOM
window.addEventListener('load', (event) => {
    console.log("Se cargo la pagina");
});

// En el HTML puedo cargar mi script js en el head y luego hacer:
// <body onload='funcion()'> </body> -> Funcion se ejecutara luego de cargado el DOM