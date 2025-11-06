interface UsuarioLogin {
    id: number;
    usuario: string;
    contraseña: string;
}

const UsuarioParaLogin: UsuarioLogin = {
    id: 1,
    usuario: "Ali",
    contraseña: "123"
}
function login(usuario: UsuarioLogin): void{
    if(usuario.contraseña == '123' && usuario.usuario == 'Ali'){
        console.log("Usuario", usuario.usuario, "logueado correctamente");
    }else {
        console.log("Error de autenticación");
    };
}


