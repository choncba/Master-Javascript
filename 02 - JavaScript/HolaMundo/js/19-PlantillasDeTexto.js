'use strict'

// Plantillas de texto: Permite interpolar texto con variables de forma más eficiente

var nombre = prompt("Ingrese su Nombre:");
var apellido = prompt("Ingrese su apellido:");

// Forma usual:
var texto = "<h1>Mi nombre es: " + nombre + "</h1><br><h2>Mi Apellido es: " + apellido + "</h2>";
document.write(texto);

// Con plantillas:
// Se usan comillas invertidas para definirlo `` y ${} me permite ingresar la variable
var plantilla = `                                       
                <h1>Mi nombre es: ${nombre}</h1><br>
                <h2>Mi apellido: ${apellido}</h2>
                `;

document.write(plantilla);