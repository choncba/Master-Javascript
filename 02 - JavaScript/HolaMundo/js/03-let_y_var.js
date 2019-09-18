'use strict'

// let es otra palabra reservada para definir variables, el alcance es local, 
// en cambio con var son globales

// Con var
var numero = 40;
console.log(numero); // 40

if(true)
{
    var numero = 50;     // JS permite redefinicion de variables globales
    console.log(numero); // 50
}

console.log(numero);    // 50 -> Como numero se definio global, cualquier funcion puede modificarlo

// let es otra palabra reservada para definir variables, el alcance es local, 
// en cambio con var son globales

// Con let
var texto = "Hola";
console.log(texto); // Hola

if(true)
{
    let texto = "Chau";     // defino la variable con el mismo nombre, pero usando let en lugar de var
    console.log(texto);     // Chau
}

console.log(texto);    // Hola -> Como en el if texto se definio local, fuera del loop mantiene su valor

