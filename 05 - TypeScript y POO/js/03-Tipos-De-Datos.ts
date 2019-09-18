// Cadena
let cadena: string = "Luciano Bono";
console.log(cadena);
 
//cadena = 12; // Me da un error al compilar, no puedo asignar un número a un string

// Número
let numero: number = 12;

// Bool
let true_false: boolean = true;

// Any - Tipo de dato sin definición
let cualquiera: any = "hola";
cualquiera = 12;        // Lo acepta sin problemas
cualquiera = true;      // Lo acepta sin problemas

// Array
var lenguajes: Array<string> = ["Hola", "Chau"];    // Debo definir los tipos de datos que usará entre <>
//lenguajes[0] = 12; // Da un error

let years: number[] = [12, 15, 17, 25]; // También se puede definir como tipo[]

// Puedo definir variables que acepten multiples tipos de datos así:
let variable: string | number = "Hola"; // con | separamos los tipos que acepta - 
variable = 15; // No da ningun error

// Tipo de datos personalizado:
type letras_numeros = string | number;   // Es un tipo de datos que acepta variables personalizadas

// let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;               // let define una variable de bloque, solo existe dentro del mismo
    var numero2 = 55;               // var redefine la variable global definida fuera del bloque

    console.log(numero1,numero2)    // 44,55
}
console.log(numero1,numero2)    // 10,55

// TypeScript resuelve el problema de compatibilidad, por ejemplo let no puede usarse en navegadores antiguos