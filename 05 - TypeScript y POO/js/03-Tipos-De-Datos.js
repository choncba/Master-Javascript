// Cadena
var cadena = "Luciano Bono";
console.log(cadena);
//cadena = 12; // Me da un error al compilar, no puedo asignar un número a un string
// Número
var numero = 12;
// Bool
var true_false = true;
// Any - Tipo de dato sin definición
var cualquiera = "hola";
cualquiera = 12; // Lo acepta sin problemas
cualquiera = true; // Lo acepta sin problemas
// Array
var lenguajes = ["Hola", "Chau"]; // Debo definir los tipos de datos que usará entre <>
//lenguajes[0] = 12; // Da un error
var years = [12, 15, 17, 25]; // También se puede definir como tipo[]
// Puedo definir variables que acepten multiples tipos de datos así:
var variable = "Hola"; // con | separamos los tipos que acepta - 
variable = 15; // No da ningun error
// let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44; // let define una variable de bloque, solo existe dentro del mismo
    var numero2 = 55; // var redefine la variable global definida fuera del bloque
    console.log(numero1_1, numero2); // 44,55
}
console.log(numero1, numero2); // 10,55
// TypeScript resuelve el problema de compatibilidad, por ejemplo let no puede usarse en navegadores antiguos
