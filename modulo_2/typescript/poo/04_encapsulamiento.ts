class Usuario {
    private password: string = '12345';
    public username: string;
    constructor(username: string) {
        this.username = username;
    }
    autenticar(password: string): boolean{
        return password==this.password;
    }
}

const user = new Usuario('Ali');
const autenticacion = user.autenticar('12345');
if(autenticacion){
    console.log("Usuario", user.username, "autenticado correctamente");
} else{
    console.log("Error de autenticación");
}