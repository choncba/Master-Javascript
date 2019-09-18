'use strict'

// Mostrar los numero impares entre 2 numeros introducidos por el usuario

var numero1 = 0, numero2 = 0;

do{
    numero1 = parseInt(prompt("Ingrese el número 1",0));
    numero2 = parseInt(prompt("Ingrese el número 2",0));
    console.log(numero1, numero2);
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Te dije un número culiá!!!")
    }
}
while(isNaN(numero1) || isNaN(numero2));

var mayor = 0, menor = 0;

if(numero1>numero2){
    mayor = numero1;
    menor = numero2;
}
else{
    mayor = numero2;
    menor = numero1;
}

console.log("Los numeros impares entre " + menor + " y " + mayor + " son:")
for(var i=menor+1; i<mayor; i++){
    if(i%2){
        console.log(i);
    } 
}