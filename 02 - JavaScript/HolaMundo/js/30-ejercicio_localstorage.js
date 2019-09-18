'use strict'

var i=0;

function Guardar(){
    var nombre = document.querySelector("#agregarpelicula").value;

    if(nombre){
        var lista_peliculas = document.querySelector("#peliculas");
        var p = document.createElement("p");
        p.append(nombre);
        lista_peliculas.append(p);
        localStorage.setItem("pelicula" + ++i, nombre );
    }
}