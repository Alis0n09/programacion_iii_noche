var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RegistroAccesos = /** @class */ (function () {
    function RegistroAccesos() {
    }
    RegistroAccesos.prototype.reposo = function () {
        console.log("Sistema en modo reposo...");
    };
    return RegistroAccesos;
}());
var Visitantes2 = /** @class */ (function (_super) {
    __extends(Visitantes2, _super);
    function Visitantes2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Visitantes2.prototype.registrarEntrada = function () {
        console.log("Visitante registrado en el sistema");
    };
    return Visitantes2;
}(RegistroAccesos));
var ingreso = new Visitantes2();
ingreso.registrarEntrada();
ingreso.reposo();
