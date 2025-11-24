class RegistroAcceso{
    public titulo: string;
    private responsable: string;
    protected codigo: string = 'ACCESO-2024-ALIVIDA';
    constructor(titulo: string, responsable: string){ 
        this.titulo = titulo;
        this.responsable = responsable;
    }
    getAutor(): string{
        return this.responsable;
    }
    setAutor(responsable: string): void{
        this.responsable = responsable;
    }
    getcota(): string{
        return this.codigo;
    }
    
}

const RegistroVisitantes = new RegistroAcceso("Registro de Visitantes", "Guardia Luis");
console.log("Titulo del registro:", RegistroVisitantes.titulo);
console.log("Responsable:", RegistroVisitantes.getAutor());
console.log("Modificando responsable...", RegistroVisitantes.setAutor("Control de Acceso Alivida"));
console.log("Código interno:", RegistroVisitantes.getcota()); 
console.log("Responsable actual:", RegistroVisitantes.getAutor());
