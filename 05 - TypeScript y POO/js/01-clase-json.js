// Clase como objeto JSON, es la forma más sencilla

var bicicleta = {
    color: 'rojo',                          // PROPIEDADES
    modelo: 'bmx',
    frenos: 'disco',
    VelMax: '60km',
    cambiaColor: function(nuevo_color){     // Puede definirse una funcion como objeto - METODO
        bicicleta.color = nuevo_color;
        // o bien:
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor("Azul");

$
