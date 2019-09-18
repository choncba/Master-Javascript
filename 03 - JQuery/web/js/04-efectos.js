// Efectos con jQuery: https://www.w3schools.com/jquery/jquery_ref_effects.asp

$(document).ready(function(){

    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        // $('#caja').show('fast');     // Equivale a display:block
        // $('#caja').fadeIn('fast');   // Hace un fade
        $('#caja').fadeTo('slow',1);    // Desvanece a todo (1) o nada (0), puedo poner puntos intermedios (0.2)
                                        // No es necesario poner la velocidad
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        // $('#caja').hide('fast');
        // $('#caja').fadeOut('fast');
        // $('#caja').fadeTo('slow',0);
        $('#caja').slideUp('slow',function(){
            console.log("Caja ocultada");       // Funciond e callback dentro de la animación, se ejecuta cuando la misma finaliza.
        });
    });

    $('#cambiar').click(function(){
        // $('#caja').toggle('fast');            // Muestra/oculta con un unico boton
        // $('#caja').fadeToggle('fast');        // Igual que el toggle pero con fade
        $('#caja').slideToggle('fast');          // Igual que el toggle pero con fplegado
    });

    // https://www.w3schools.com/jquery/eff_animate.asp
    $('#animar').click(function(){
        $('#caja').animate({                        // (selector).animate({styles},{options}) - Styles es un JSON
                                marginLeft:'500px',
                                fontSize:'40px',
                                height:'100px'    
                            },'slow')
                .animate({                        // Podemos encadenar efectos de la animacion
                            borderRadius:'900px',
                            marginTop:'50px'
                            },'slow')
                .animate({                        
                            borderRadius:'0px',
                            marginLeft:'0px' 
                        },'slow')
                .animate({                        
                            borderRadius:'100px',
                            marginTop:'0px'  
                        },'slow');                        
    });
});