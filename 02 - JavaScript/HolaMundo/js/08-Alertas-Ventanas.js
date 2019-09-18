'use strict'

// Alerta
alert("Hola!!");

// Confirmacion - Ventana emergente con aceptar(devuelve true)/cancelar(false)
var resultado = confirm("¿Esta seguro de continuar?");
if(resultado){
    alert("Gracias!");
}
else
{
    alert("Malondon!");
}

// Ingreso de datos
var edad = prompt("¿Que edad tienes?", 18); // Siempre debe tener un valor por defecto
alert("Tu edad es " + edad + "años");