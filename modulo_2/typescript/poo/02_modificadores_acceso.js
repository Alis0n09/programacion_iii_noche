var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.cota = '1233232233';
        this.titulo = titulo;
        this.autor = autor;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getcota = function () {
        return this.cota;
    };
    return Libro;
}());
var LibroHostoriaQuito = new Libro("Historia de Quito", "Pedro Pérez");
console.log("Titulo del libro:", LibroHostoriaQuito.titulo);
console.log("Autor del libro:", LibroHostoriaQuito.getAutor());
console.log("Modificando autor...", LibroHostoriaQuito.setAutor("Lius Lozano"));
console.log("Cota del libro:", LibroHostoriaQuito.getcota());
console.log("Autor", LibroHostoriaQuito.getAutor());
