$(document).ready(function(){
    // alert("Estoy listo!");

    // MouseOver y MouseOut
    var caja = $("#caja");
    // caja.mouseover(function(){
    //     $(this).css("background", "red");
    // });

    // caja.mouseout(function(){
    //     $(this).css("background", "yellow");
    // });

    // También con Hover:
    function CambiaRojo(){
        $(this).css("background", "red");
    }

    function CambiaVerde(){
        $(this).css("background", "yellow");
    };
    
    caja.hover(CambiaRojo, CambiaVerde);    // Toma 2 funciones de callback

    // Click, doble Click
    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","grey")
                .css("color","yellow");
    });

    // Focus y Blur
    var entrada = $("#nombre"); // Selecciono el input con id datos
    var datos = $("#datos");    // Selecciono el div con id datos

    entrada.focus(function(){
        $(this).css("border","2px solid green");
        //datos.hide(); // es lo mismo que en css: display: none
    });

    entrada.blur(function(){
        $(this).css("border","1px solid grey");
        datos.text($(this).val()).show(); // 1 - Selecciono el div con id datos
                                                // 2 - text() inserta texto dentro del elemento seleccionado
                                                // le paso como argumento $(this).val() este metodo extrae el texto del
    });                                         // input con id nombre
                                                // 3 - El metodo show es lo mismo que en css - display: block
    // Mouse Dow/Up
    
    datos.mousedown(function(){                 // Al presionar el mouse
        $(this).css("border-color", "green");
    });

    datos.mouseup(function(){                   // Al liberar el mouse
        $(this).css("border-color", "black");
    });

    // Mouse move - Captura el movimiento del mouse
    $(document).mousemove(function(){
        // console.log("X: " + event.clientX + " - Y: " + event.clientY);
        $("#sigue_mouse").css("left",event.clientX)     // Hace que el DIV convertido en circulo siga al mouse!!!
                         .css("top",event.clientY);
        $('body').css("cursor","none");                 // Oculta el cursor                      
    });
});