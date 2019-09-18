// Utilizo distintos metodos de jQuery UI
$(document).ready(function(){
    
    // Draggable - Me permite mover los elementos por la página
    $(".elemento").draggable(); 

    // Resizable - Me permite cambiar el tamaño de los elementos en la página
    $(".elemento").resizable(); 

    // Selectable - Me permite seleccionar elementos
    //$(".lista_seleccionable").selectable();

    // Sortable - Ordenar elementos
    $(".lista_seleccionable").sortable();

    // Droppable - Permite arrastrar y soltar elementos a la pagina
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Soltaste algo dentro del area");
        }
    });

    // Efectos - reciben ademas opciones por JSON
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("fade"); // Lo mismo que .fadeToggle()
        //$(".caja-efectos").effect("explode"); // https://jqueryui.com/effect/ - tambien .toggle("explode")
    });

    // Tooltip - Muestra el contenido del title como un tooltip (cartel de referencia)
    $(document).tooltip();

    // Dialog
    $("#lanzar_popup").click(function(){
        $("#popup").dialog();
    });

    // Calendario
    $("#calendario").datepicker();

    // Tabs
    $("#panel").tabs();
    
});