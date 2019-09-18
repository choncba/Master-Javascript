'use strict'

// Utilizo un servicio REST de prueba: https://jsonplaceholder.typicode.com/
// tambien hay otros: https://reqres.in/
// Se puede instalar en Chrome JsonView para ver JSON formateado en el navegador

// Fetch y peticiones a servicios REST - Peticiones AJAX
var div_usuarios = document.querySelector("#usuarios");

var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users') // Realiza una peticion a la url indicada
    .then(data => data.json())  // recibe un array de objetos JSON, uso .json() para recuperarlos
    .then(data => {
        console.log(data);
        data.forEach((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + " - " + user.name; // .name es un elemento de la respuesta JSON

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none'; // Oculto el cargando...
        });
    });
    
