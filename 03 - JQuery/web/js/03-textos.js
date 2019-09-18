$(document).ready(function(){
    loadLinks();

    //console.log($('a').length); // Indico cuantos <a> hay en el DOM

    $('#nuevo_boton').click(function(){
        //$('#lista').html('<li><a href="' + $("#nuevo").val() + '"></a></li>');    // Reemplaza el html de la lista
        //$('#lista').append('<li><a href="' + $("#nuevo").val() + '"></a></li>');  // Agrega el html al final de la lista
        $('#lista').prepend('<li><a href="' + $("#nuevo").val() + '"></a></li>');   // Agrega el html al principio de la lista
        //$('#lista').after('<li><a href="' + $("#nuevo").val() + '"></a></li>');   // Agrega el html después de la lista
        //$('#lista').before('<li><a href="' + $("#nuevo").val() + '"></a></li>');  // Agrega el html antes de la lista
        $("#nuevo").val('');    // limpia el texto del selector luego de presionar el boton y añadir a la lista
        loadLinks();
    });
});

function loadLinks(){
    $('a').each(function(){            // each recorre los elementos como un foreach
        //console.log(this);
        var that = $(this);
        //console.log(that);
        var enlace = that.attr("href"); // El metodo attr toma el atributo indicado
        //console.log(enlace);
        that.attr("target","_blank");   // attr tambien sirve para agregar o modificar atributos, 
                                        // en este caso le indico que abra en una nueva ventana
        //that.removeAttr("target","_blank"); // Puedo eliminar atributos con removeAttr
        that.text(enlace);
    });
}