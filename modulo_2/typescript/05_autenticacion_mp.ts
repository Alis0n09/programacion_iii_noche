interface UsuarioLogin {
    id: number;
    usuario: string;
    contraseña: string;
}

const UsuariosParaLogin: UsuarioLogin = {
    id: 1,
    usuario: "GuardiaLuis",
    contraseña: "acceso2024"
}
function logins(usuario: UsuarioLogin): void{
    if(usuario.contraseña == 'acceso2024' && usuario.usuario == 'GuardiaLuis'){
        console.log("Usuario", usuario.usuario, "logueado correctamente en el sistema de acceso");
    }else {
        console.log("Error de autenticación");
    };
}
