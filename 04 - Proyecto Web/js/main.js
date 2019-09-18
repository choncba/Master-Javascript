$(document).ready(function(){

    // verifico si estoy en la pagina principal - index.html, si no evito cargar el JS y usar el mismo main.js
    // Tambien se podría separar en otro archivo
    if(window.location.href.indexOf('index') >= 0){  

    // Activamos el slider, ver opciones: https://bxslider.com/options/
    $('.bxslider').bxSlider({
        mode: 'fade',
        //captions: true,
        slideWidth: 1200,
        pager: false, 
        auto: true,
        pause: 2000,
        autoHover: true
      });

    // Posts
    // Creo una variable JSON donde se almacenan las entradas dinamicas
    var posts = [
    {
        title: 'Titulo de prueba 1',
        date: 'Publicado el ' + moment().format('LL'),  // ver https://momentjs.com/docs/#/displaying/
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas viverra nisl. Proin hendrerit imperdiet finibus. Vestibulum cursus porta nisi eu lacinia. Maecenas in facilisis metus. Curabitur rhoncus vel neque et mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vel lacinia felis. Sed vitae est lorem."
    },
    {
        title: 'Titulo de prueba 2',
        date: 'Publicado el ' + moment().format('LL'),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas viverra nisl. Proin hendrerit imperdiet finibus. Vestibulum cursus porta nisi eu lacinia. Maecenas in facilisis metus. Curabitur rhoncus vel neque et mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vel lacinia felis. Sed vitae est lorem."
    },
    {
        title: 'Titulo de prueba 3',
        date: 'Publicado el ' + moment().format('LL'),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas viverra nisl. Proin hendrerit imperdiet finibus. Vestibulum cursus porta nisi eu lacinia. Maecenas in facilisis metus. Curabitur rhoncus vel neque et mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vel lacinia felis. Sed vitae est lorem."
    },
    {
        title: 'Titulo de prueba 4',
        date: 'Publicado el ' + moment().format('LL'),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas viverra nisl. Proin hendrerit imperdiet finibus. Vestibulum cursus porta nisi eu lacinia. Maecenas in facilisis metus. Curabitur rhoncus vel neque et mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vel lacinia felis. Sed vitae est lorem."
    },
    {
        title: 'Titulo de prueba 5',
        date: 'Publicado el ' + moment().format('LL'),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas viverra nisl. Proin hendrerit imperdiet finibus. Vestibulum cursus porta nisi eu lacinia. Maecenas in facilisis metus. Curabitur rhoncus vel neque et mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vel lacinia felis. Sed vitae est lorem."
    }
    ];

    // Ingreso una estructura article por cada post en el JSON
    // <article class="post">
    //     <h2>Titulo del Artículo</h2>
    //     <span class="fecha">Fecha de publicación</span>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas viverra nisl. Proin hendrerit imperdiet finibus. Vestibulum cursus porta nisi eu lacinia. Maecenas in facilisis metus. Curabitur rhoncus vel neque et mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vel lacinia felis. Sed vitae est lorem.</p>
    //     <a href="#" class="button-more">Leer más</a>
    // </article>

    // Genero una estructura por cada entrada del array JSON
    posts.forEach(element => {
        var post = `                                        
        <article class="post">
            <h2>${element.title}</h2>
            <span class="fecha">${element.date}</span>
            <p>${element.content}</p>
            <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        
        $("#posts").append(post);
    });

}

    // Cambio los temas al hacer click en los botones
    var tema = $("#tema");
    $("#a_verde").click(function(){
        tema.attr("href","css/green.css");
    });

    $("#a_rojo").click(function(){
        tema.attr("href","css/red.css");
    });

    $("#a_azul").click(function(){
        tema.attr("href","css/blue.css");
    });

    // Boton subir en footer
    $(".subir").click(function(e){
        e.preventDefault(); // Evita que el link nos intente llevar a otra url
        $('html, body').animate({ scrollTop: 0 }, 500); // Lleva al principio de la página
        return false;   // Evito que el link nos redirija
    });

    // Login

    // Verifico si el usuario esta ya cargado en el local storage
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    // si esta almacenado, cargo el nombre y oculto el login
    if(usuario != null){
        if(usuario.nombre != null || usuario.nombre != "undefined"){
            var about = $("#about p");
            about.html("<strong>Bienvenido, " + usuario.nombre + "<strong>");
            about.append("<a href='#' class='button-more' id='button_logout'>Salir</a>");
            $("#login").hide();
        }
        else{
            $("#about p").hide();
            $("#login").show();
        }
    }
    
    // Cierro sesión
    $("#button_logout").click(function(){
        localStorage.clear();
        $("#login").show();
        $("#about p").hide();
    });

    $("#login form").submit(function(){
  
        var user = {
            nombre: $("#nombre").val(),
            mail: $("#mail").val(),
            password: $("#password").val()
        };
        
        localStorage.setItem('usuario', JSON.stringify(user));
        
        // var nombre = $("#nombre").val();
        // var mail = $("#mail").val();
        // var password = $("#password").val();
        // localStorage.setItem("nombre", nombre);
    });
    
    // Si estoy en la pagina acerca.html - Veo el acordeon
    if(window.location.href.indexOf('acerca') >= 0){ 
        $("#acordeon").accordion();
    }

    // Si estoy en la pagina reloj.html - veo el reloj
    if(window.location.href.indexOf('reloj') >= 0){ 

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    // Si estoy en la pagina contacto.html - Validación
    if(window.location.href.indexOf('contacto') >= 0){ 
        $.validate({
            lang: 'es'
          });
    }
});