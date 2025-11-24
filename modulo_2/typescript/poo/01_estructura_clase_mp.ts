class Visitantes{
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void{
        console.log("Hola, soy", this.nombre, "y tengo", this.edad, "años. Ingreso registrado.");
    }
}

const VisitanteCarlos = new Visitantes("Visitante Carlos", 32);
console.log("Nombre");
console.log (VisitanteCarlos.nombre);
console.log("Edad");
console.log (VisitanteCarlos.edad);
console.log("Saludo");
VisitanteCarlos.saludar();