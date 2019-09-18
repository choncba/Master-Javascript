'use strict'

// JSON - Javascript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: "EEUU"
};

console.log(pelicula);  // Muestra la variable JSON

pelicula.titulo = "Harry Potter";   // Cambia el valor de la propiedad titulo

// Array de objetos JSON
var peliculas = [
    {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: "EEUU"
    },
    {
        titulo: '9 Reinas',
        year: 2010,
        pais: "Argentina"
    },
    {
        titulo: 'Matrix',
        year: 2008,
        pais: "EEUU"
    }
];

console.log(peliculas);  // Muestra el array de objetos JSON

var lista_peliculas = document.querySelector("#peliculas");
peliculas.forEach((peli, i)=>{
    var p = document.createElement("p");
    p.append(peli.titulo);
    lista_peliculas.append(p);
    console.log(peli.titulo);
});

// Con for será:
for(let items in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[items].titulo);
    lista_peliculas.append(p);
    console.log(peliculas[items].titulo);
};