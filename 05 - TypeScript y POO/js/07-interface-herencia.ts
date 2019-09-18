// Interface - define una estructura base como requisito que deben cumplir las clases, como un "contrato" a cumplir
interface prendaBase{
    setUbicacion(ubicacion);
    getUbicacion();
}

// Decorador - Sirve para agregar una funcionalidad a una clase
// https://www.typescriptlang.org/docs/handbook/decorators.html
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{ // estampacion es un nuevo método que se agregará - function():void indica que no se retorna nada
            console.log("Camiseta estampada con el logo: "+logo); // En este caso la funcion solo hace un log
        }
    }
}

// Prototipo
@estampar('Levis')  // El decorador se coloca sobre la definicion de la clase, se cierra sin ; - es utilizado en angular
class prenda implements prendaBase{ // implements especifica que la clase tiene que cumplir con los parámetros de
                                    // prendaBase, las funciones setUbicacion y getUbicacion en este caso, si no las defino
                                    // me da un error
    // Propiedades
    public color: string;
    public modelo: string;
    public marca: string;
    public talle: string;
    public precio: number;

    private ubicacion: string;  // Sólo se puede modificar desde la misma clase

    protected ciudad: string;   // Sólo se modifica desde la misma clase, o desde clases derivadas 

    // Métodos
    constructor(color:string, modelo:string, marca:string,talle:string,precio:number ){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }

    public setUbicacion(ubicacion:string){ // De esta forma accedo a una variable private
        this.ubicacion = ubicacion;
    }

    public getUbicacion(){
        return this.ubicacion;
    }

}

var camiseta = new prenda("rojo", "Manga corta", "Levis", "M", 120);
console.log(camiseta);

// Herencia
class musculosa extends prenda{ // extends adquiere todos los metodos y propiedades de la clase heredada
    private capucha: boolean;
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return(this.capucha)
    }
}

var musculosa_nike = new musculosa("rojo", "Manga corta", "Levis", "M", 120);
console.log(musculosa_nike);
musculosa_nike.setCapucha(true);
console.log(musculosa_nike.getCapucha());   // Propio de la clase musculosa
musculosa_nike.setUbicacion("Deposito");
console.log(musculosa_nike.getUbicacion()); // Heredado de la clase prenda