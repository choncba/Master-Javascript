"use strict";
// Clases - https://www.typescriptlang.org/docs/handbook/classes.html
Object.defineProperty(exports, "__esModule", { value: true });
// Prototipo - 
var prenda = /** @class */ (function () {
    // Métodos
    // Constructor, Inicializa el objeto con los valores iniciales
    // Es el primer método que se ejecuta
    function prenda(color, modelo, marca, talle, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }
    prenda.prototype.CambiarUbicacion = function (ubicacion) {
        this.ubicacion = ubicacion;
    };
    prenda.prototype.GetUbicacion = function () {
        return this.ubicacion;
    };
    return prenda;
}());
exports.prenda = prenda;
// var camiseta = new prenda(); // Defino la variable camiseta de la clase prenda -> SIN constructor
// camiseta.color = "rojo";
// camiseta.modelo = "Manga corta";
// camiseta.marca = "Levis";
// camiseta.talle = "M";
// camiseta.precio = 120;
var camiseta = new prenda("rojo", "Manga corta", "Levis", "M", 120); // Inicializa el objeto CON Constructor
console.log(camiseta);
camiseta.CambiarUbicacion("Deposito"); // Modifico la variable private con un metodo public
console.log(camiseta.GetUbicacion()); // Accedo al valor private con un metodo public
