var UsuarioParaLogin = {
    id: 1,
    usuario: "Ali",
    contraseña: "123"
};
function login(usuario) {
    if (usuario.contraseña == '123' && usuario.usuario == 'Ali') {
        console.log("Usuario", usuario.usuario, "logueado correctamente");
    }
    else {
        console.log("Error de autenticación");
    }
    ;
}
