var RegistroAcceso = /** @class */ (function () {
    function RegistroAcceso(titulo, responsable) {
        this.codigo = 'ACCESO-2024-ALIVIDA';
        this.titulo = titulo;
        this.responsable = responsable;
    }
    RegistroAcceso.prototype.getAutor = function () {
        return this.responsable;
    };
    RegistroAcceso.prototype.setAutor = function (responsable) {
        this.responsable = responsable;
    };
    RegistroAcceso.prototype.getcota = function () {
        return this.codigo;
    };
    return RegistroAcceso;
}());
var RegistroVisitantes = new RegistroAcceso("Registro de Visitantes", "Guardia Luis");
console.log("Titulo del registro:", RegistroVisitantes.titulo);
console.log("Responsable:", RegistroVisitantes.getAutor());
console.log("Modificando responsable...", RegistroVisitantes.setAutor("Control de Acceso Alivida"));
console.log("Código interno:", RegistroVisitantes.getcota());
console.log("Responsable actual:", RegistroVisitantes.getAutor());
