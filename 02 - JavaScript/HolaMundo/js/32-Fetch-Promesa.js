'use strict'

// Utilizo un servicio REST de prueba: https://jsonplaceholder.typicode.com/
// Igual que el ejemplo anterior, pero separado en funciones
// Se puede instalar en Chrome JsonView para ver JSON formateado en el navegador

// Ver la respuesta JSON del servidor desde el navegador en https://jsonplaceholder.typicode.com/users
// Para ver un usuario particular, agrego a la url /2 -> usuario 2 del array

// Fetch y peticiones a servicios REST - Peticiones AJAX

// Solicita los datos a la url
function getUsuarios(url){
    return fetch(url); // Realiza una peticion a la url indicada
}

// solicita el dato de orden num al servidor
function getUsuario(url, num){
    return fetch(url + "/" + num); 
}

function listarUsuarios(data){
    var div_usuarios = document.querySelector("#usuarios");

    data.forEach((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + " - " + user.name; // .name es un elemento de la respuesta JSON

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none'; // Oculto el cargando...
    });
}

function listarUsuario(data, num){
    var div_usuario = document.querySelector("#usuario");

    let nombre = document.createElement('h3');
    nombre.innerHTML = "El usuario " + num + " es " + data.name; 
    div_usuario.appendChild(nombre);
    document.querySelector(".loading2").style.display = 'none'; // Oculto el cargando...
}

var direccion = 'https://jsonplaceholder.typicode.com/users';

var num_usuario = 2;    // Solicito el usuario 2 del array

getUsuarios(direccion)          // Invoca a la funcion getUsuarios, que retorna un método fetch, una promesa
    .then(data => data.json())  // recibe un array de objetos JSON, uso .json() para recuperarlos
    .then(data => {
        listarUsuarios(data);

        return getUsuario(direccion, num_usuario);  // Ahora solicito un solo usuario al server
    })                                              // el return es pasado a la siguiente promesa
    .then(data => data.json())                      // Y obtengo la respuesta
    .then(data =>{
        listarUsuario(data, num_usuario);           // Muestro ese unico usuario

        return getInfo();                           // invoco la promesa getInfo
    })                                              
    .then(data => { console.log(data)})             // Si getInfo() responde, lo proceso
    .catch(error => {                               // El metodo catch recoge el error de cualquiera de las promesas
        console.log(error);                         // y podemos procesarlo en un callback
    });                                             // Las promesas terminan al poner ;

// CREAR promesa:
// El objeto Promise (Promesa) es usado para computaciones asíncronas. 
// Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
function getInfo(){
    var persona = {         // Creo una variable JSON cualquiera
        nombre: "Luciano",
        apellido: "Bono",
        edad: "35"
    };

    return new Promise((resolve, reject) => {   // new Promise define una promesa
        var persona_string = JSON.stringify(persona);

        if(typeof persona_string != 'string') return reject('Error de stringify'); // Sino se cumple una condicion regreso reject
        else    return resolve(persona_string);     // En caso de que se cumpla, regreso resolve
    });
}