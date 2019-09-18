'use strict'

window.addEventListener("load", function(){
    console.log("DOM Cargado.");

    var box_dashed = document.querySelector(".dashed"); // Selecciono el primer objeto con clase dashed (el box)
    box_dashed.style.display = "none";                  // Y lo oculto

    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', function(){
        console.log("Evento Submit");
        
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El campo Nombre no puede estar vacío");
            document.querySelector("#nombre").style.backgroundColor = "red";
            return false;
        }

        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("El campo Apellido no puede estar vacío");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La Edad No es válida");
            return false;
        }

        box_dashed.style.display = "block"; // Ahora muestro el box

        // Forma Manual, agregando los <p> al HTML
        var p_nombre = document.querySelector("#p_nombre span");    // Selecciona el span dentro de la etiqueta con id p_nombre
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;

        // De esta forma lo muestra automatico
        // var datos_usuario = [nombre, apellido, edad];
        // for(let indice in datos_usuario){
        //     var parrafo = document.createElement("p");
        //     parrafo.append(datos_usuario[indice]);
        //     box_dashed.append(parrafo);
        // }
        


    });



    

});