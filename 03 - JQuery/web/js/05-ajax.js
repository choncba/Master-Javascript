// Web de prueba para metodos get/post, etc. https://reqres.in/

// Metodos AJAX jQuery: https://www.w3schools.com/jquery/jquery_ref_ajax.asp

$(document).ready(function(){

    // LOAD
    //$("#datos").load("https://reqres.in/"); // El método load carga informacion de un servidor con GET y lo inserta en el elemento seleccionado 
                                            // Ver: https://www.w3schools.com/jquery/jquery_ajax_load.asp

    // GET
    $.get("https://reqres.in/api/users", {page:2}, function(response){   // Utilizo el metodo get para solicitar data al servidor,
        console.log(response);                                                  // la url completa es https://reqres.in/api/users?page=2
                                                                                // pero puedo pedirlo como parametro con el json: {page:2}
                                                                                // Finalmente la funcion de callback recibe la respuesta 
                                                                                // en response
    // El JSON de respuesta tiene la forma:
    // data": [
    //     {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    //     }, (...)
                                                                            
    response.data.forEach(element => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });                                                                                
    });   
    
    // POST
    var usuario = {
        "name":"Luciano Bono",
        "twitter":"@choncba"
    };

    $.post("https://reqres.in/api/users",usuario, function(response){   // Envio el JSON usuario al servidor
        console.log(response);
    }).done(function(){                                                 // Opcional, con done tenemos un callback para realizar una accion adicional
        alert("Usuario añadido correctamente");
    });

    // $.ajax - https://www.w3schools.com/jquery/ajax_ajax.asp
    // Nos permite personalizar mucho más el tipo y forma de petición, la mayor parte de los parámetros pueden ser opcionales
    $.ajax({
        type: 'POST',
        url: 'https://reqres.in/api/users',
        data: usuario,
        beforeSend: function(){
            console.log("Enviando Usuario...");
        },
        success: function(response){
            console.log(response);
        },
        error: function(){
            console.log("A ocurrido un error");
        },
        timeout: 2000
    });
});