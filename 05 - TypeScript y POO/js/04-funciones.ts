// Funcion estandard de JS:
function getNumero(numero){
    return("El numero es "+numero);
}

console.log(getNumero(12));

// En TS puedo determinar que tipo acepto y qué tipo devuelvo así:
function getNumeroTS(numero:number):string{
    return("El numero es "+numero);
}

console.log(getNumeroTS(12));
// console.log(getNumeroTS("12"));  // Da un error