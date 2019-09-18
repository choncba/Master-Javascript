'use strict'

// Local Storage - Guarda info en el cache del browser - Por cada dominio que lo utilice

// Verificamos que el navegador sea compatible
if(typeof(Storage) != 'undefined'){
    console.log("Local Storage Disponible!");
}
else{
    console.log("Local Storage NO Disponible!");
}

// Guardar Texto
localStorage.setItem("titulo", "Curso de JavaScript");  // Almacena el dato en el Localstorage del navegador,
                                                        // Para verlo en la consola de desarrollador de Chrome buscarlo en 
                                                        // Application -> Local Storage
// Recuperar datos
var dato = localStorage.getItem("titulo");                                                        
console.log(dato);

// Guardar Objetos JSON
var usuario = {
    nombre: "Luciano Bono",
    mail: "luciano_bono@hotmail.com",
    web: "hbingenieria.com.ar"
};

localStorage.setItem("usuario", JSON.stringify(usuario));       // DEBO almacenarlo como stringcon stringify

// Para recuperarlo:
var dato_json = JSON.parse(localStorage.getItem("usuario"));    // Devuelvo el String a JSON con parse 

console.log(dato_json);

// Borrar Items del navegador:
localStorage.removeItem("usuario");
