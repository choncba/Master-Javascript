// Clases - https://www.typescriptlang.org/docs/handbook/classes.html

// Prototipo - 
export class prenda{    // export indica que la clase se puede importar desde otro archivo .ts
    // Propiedades
    public color: string;
    public modelo: string;
    public marca: string;
    public talle: string;
    public precio: number;

    private ubicacion: string;  // Sólo se puede modificar desde la misma clase

    protected ciudad: string;   // Sólo se modifica desde la misma clase, o desde clases derivadas 

    // Métodos
    // Constructor, Inicializa el objeto con los valores iniciales
    // Es el primer método que se ejecuta
    constructor(color:string, modelo:string, marca:string,talle:string,precio:number ){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }

    public CambiarUbicacion(ubicacion:string){ // De esta forma accedo a una variable private
        this.ubicacion = ubicacion;
    }

    public GetUbicacion(){
        return this.ubicacion;
    }

}

// var camiseta = new prenda(); // Defino la variable camiseta de la clase prenda -> SIN constructor
// camiseta.color = "rojo";
// camiseta.modelo = "Manga corta";
// camiseta.marca = "Levis";
// camiseta.talle = "M";
// camiseta.precio = 120;

var camiseta = new prenda("rojo", "Manga corta", "Levis", "M", 120);    // Inicializa el objeto CON Constructor

console.log(camiseta); 

camiseta.CambiarUbicacion("Deposito");  // Modifico la variable private con un metodo public
console.log(camiseta.GetUbicacion());   // Accedo al valor private con un metodo public



