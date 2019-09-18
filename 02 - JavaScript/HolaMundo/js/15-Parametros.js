'use strict'

// Parametros REST y SPREAD

function listado(fruta1, fruta2, ...resto_de_frutas){ // ...<variable> captura los parametros adicionales que puedan llegar
    console.log("Fruta 1: " + fruta1);                // y los almacena en un array  (parametro REST)
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_frutas);
}

listado("manzana", "banana", "pera", "sandia", "melon");

var frutas = ["manzana", "banana"];
listado(frutas, "pera", "sandia", "melon"); // Si lo paso así, la funcion listado interpreta que la variable
                                            // fruta1 = ["manzana", "banana"]

listado(...frutas, "pera", "sandia", "melon");  // ...frutas es un SPREAD de las variables 1 y 2, la funcion
                                                // listado asignará fruta1 = "manzana", fruta2 = "banana"
