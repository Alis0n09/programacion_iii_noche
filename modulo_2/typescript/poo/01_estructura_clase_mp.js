var Visitante = /** @class */ (function () {
    function Visitante(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Visitante.prototype.saludar = function () {
        console.log("Hola, soy", this.nombre, "y tengo", this.edad, "años. Ingreso registrado.");
    };
    return Visitante;
}());
var visitanteCarlos = new Persona("Visitante Carlos", 32);
console.log("Nombre");
console.log(visitanteCarlos.nombre);
console.log("Edad");
console.log(visitanteCarlos.edad);
console.log("Saludo");
amigoPedro.saludar();
