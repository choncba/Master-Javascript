'use strict'

window.addEventListener('load', function(){
    
    // setInterval - Se executa cada 1000 mSeg
    var tiempo = 0;
    var timer = setInterval(() => {
        console.log(tiempo);
        tiempo++;
    }, 1000);

    // setTimeout - Se ejecuta una sola vez a los 2000 mSeg
    setTimeout(() => {
        document.getElementById("prueba").style.fontSize = "50px";
        console.log("Se cambio el tamaño");
    }, 2000); 

    var boton = document.querySelector("#boton");

    boton.addEventListener("click", function(){     // Captura el evento click en el boton y detiene el setInterval
    clearInterval(timer);
    console.log("Se detuvo el timer");
    });
});