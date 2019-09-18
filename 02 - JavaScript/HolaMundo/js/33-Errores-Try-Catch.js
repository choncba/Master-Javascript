'use strict'

// Manejo de fallas con try/catch

// var year = 2019;

// alert(year);    // OK
// alert(yea);     // Genera un error

// Para evitarlo:
try{                        // "Intenta" ejecutar el codigo
    var year = 2019;
    alert(yea);
}
catch(error){               // Captura el error si lo hay
    console.log(error);     // Podemos hacer cualquier otra cosa para procesarlo
}