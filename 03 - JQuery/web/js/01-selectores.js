$(document).ready(function (){
    console.log("Todo OK!");

    // Selector de ID
    var rojo = $("#rojo");
    console.log(rojo);
    rojo.css("background", "red"); // Utilizo el metodo css con la clave/valor para modificar el estilo
    // Tambien: $("#rojo").css("background","red")
    //                    .css("color","white"); -> Se pueden encadenar así  

    var amarillo = $("#amarillo").css("background", "yellow")
                                 .css("color","green");

    $("#verde").css("background","green")
               .css("color","white");

    // Selector de clases
    var mi_clase = $(".zebra"); // Selecciona todos los elementos de la clase zebra (genera un array)
    console.log(mi_clase);      // muestro el array de elementos con clase zebra
    console.log(mi_clase[0]);   // muestro el primer elemento del array
    console.log(mi_clase.eq(1));// Equivalente al anterior, muestro el primer elemento del array, pero hereda metodos de jquery

    mi_clase.css("border", "5px dashed black"); // Modifica el estilo de todos los elementos de la clase zebra

    $(".otra").click(function(){          // Captura el evento click de los elementos con clase "otra"
        console.log("Cliqueado!");
        $(this).addClass("bloque");       // Y les agrega la clase "bloque" definida en css
    });

    // Selectores de etiqueta
    var parrafos = $('p');  // Selecciona todas las etiquetas <p> del html en un array
    parrafos.css("cursor", "pointer"); // Por CCS pone el cursor en mano al pasar por encima
    console.log(parrafos);

    parrafos.dblclick(function(){      // Captura el evento doble click de todos los elementos <p>
        console.log("Doble CLick!");
        $(this).removeClass("bloque");   // remueve la clase bloque de estos elementos, si existe
    });
    
    // Selectores de atributo
    $('[title="Google"]').css('background', 'yellow');      // Utilizando corchetes [] puedo seleccionar atributos 
    $('[title="Facebook"]').css('background', 'orange');    // en particular de cualquier elemento

    // Otros
    $('p,a').addClass('margen-superior');   // Nos permite seleccionar multiples etiquetas

    var Busqueda = $("#lista").find('[title="Google"]');    // La funcion find puede buscar dentro de un query previo para encontrar elementos
    console.log("Encontre esto: ");                         // indirectamente, en este caso se busca primero el id 'lista' y se realiza la busqueda
    console.log(Busqueda);                                  // de los elementos con atributo title="Google"   

    // el método parent() permite subir de nivel un query
    var elemento = $('[title="Facebook"]');                         // Selecciona la etiqueta <a>
    console.log(elemento);
    var elemento_superior = elemento.parent();                      // Selecciona el <li> donde está <a>
    console.log(elemento_superior);
    var elemento_superior_superior = elemento_superior.parent();    // Selecciona el <ul> donde está <li>
    console.log(elemento_superior_superior);
});

