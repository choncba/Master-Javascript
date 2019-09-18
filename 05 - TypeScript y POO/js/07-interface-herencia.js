var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador - Sirve para agregar una funcionalidad a una clase
// https://www.typescriptlang.org/docs/handbook/decorators.html
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo: " + logo); // En este caso la funcion solo hace un log
        };
    };
}
// Prototipo
var prenda = /** @class */ (function () {
    // Métodos
    function prenda(color, modelo, marca, talle, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }
    prenda.prototype.setUbicacion = function (ubicacion) {
        this.ubicacion = ubicacion;
    };
    prenda.prototype.getUbicacion = function () {
        return this.ubicacion;
    };
    prenda = __decorate([
        estampar('Levis') // El decorador se coloca sobre la definicion de la clase, se cierra sin ; - es utilizado en angular
    ], prenda);
    return prenda;
}());
var camiseta = new prenda("rojo", "Manga corta", "Levis", "M", 120);
console.log(camiseta);
// Herencia
var musculosa = /** @class */ (function (_super) {
    __extends(musculosa, _super);
    function musculosa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    musculosa.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    musculosa.prototype.getCapucha = function () {
        return (this.capucha);
    };
    return musculosa;
}(prenda));
var musculosa_nike = new musculosa("rojo", "Manga corta", "Levis", "M", 120);
console.log(musculosa_nike);
musculosa_nike.setCapucha(true);
console.log(musculosa_nike.getCapucha()); // Propio de la clase musculosa
musculosa_nike.setUbicacion("Deposito");
console.log(musculosa_nike.getUbicacion()); // Heredado de la clase prenda
