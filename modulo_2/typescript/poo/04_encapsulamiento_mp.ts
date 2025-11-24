class Usuario {
    private password: string = 'acceso2024';
    public username: string;
    constructor(username: string) {
        this.username = username;
    }
    autenticar(password: string): boolean{
        return password==this.password;
    }
}

const user = new Usuario('GuardiaLuis');
const autenticacion = user.autenticar('acceso2024');
if(autenticacion){
    console.log("Usuario", user.username, "autenticado correctamente en el sistema");
} else{
    console.log("Error de autenticación");
}
