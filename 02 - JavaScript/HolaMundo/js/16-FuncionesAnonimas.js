'use strict'

// Funciones anonimas (No tienen nombre)

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

pelicula("Avatar");


// CALLBACKS
function suma(numero1, numero2, muestra, muestraeldoble){
    var sumar = numero1 + numero2;  // Funcion anonima como callback
    muestra(sumar);                 // el nombre muestra se asigna a la funcion pasada por parametro
    muestraeldoble(sumar);
    return sumar;
}

suma(5, 7,  function(dato){ // Le paso funciones anonimas como parametros
                console.log("La suma es: " + dato);
            },
            function(dato){
                console.log("El doble de la suma es: " + (dato*2));
            });

// Funciones callback como flecha
// Es una forma de abreviar la escritura de la funcion anónima
// En reemplazo de la anterior sería:

suma(5, 7,  (dato) => { // Se elimina la palabra function previa, y se agrega => después
    console.log("La suma es: " + dato);
},
dato => {   // En caso de ser una sola variable pueden sacarse los parentesis.
    console.log("El doble de la suma es: " + (dato*2));
});