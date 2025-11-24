var Usuario = /** @class */ (function () {
    function Usuario(username) {
        this.password = '12345';
        this.username = username;
    }
    Usuario.prototype.autenticar = function (password) {
        return password == this.password;
    };
    return Usuario;
}());
var user = new Usuario('Ali');
var autenticacion = user.autenticar('12345');
if (autenticacion) {
    console.log("Usuario", user.username, "autenticado correctamente");
}
else {
    console.log("Error de autenticación");
}
