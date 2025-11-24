function saludo(): string{
    return "Bienvenido al Sistema de Acceso de Alivida";
}

console.log(saludar());

function sumaInicial(): number{
    return 5 + 3;
}
console.log("Total de ingresos registrados: " + sumaInicial());

function sumass(numero1: number, numero2: number): number{
    return numero1 + numero2;
}
console.log("Vehículos en turno mañana y tarde: " + sumass(10, 15));

function sumaOpcional(numero1: number, numero2?: number): number{
    return numero1 +(numero2 ? numero2 : 15);
}
console.log(sumaOpcional(9));
console.log(sumaOpcional(25, 14));

const sumaFlecha = (num1: number, num2?: number): number => {
    return num1 + (num2 || 20);
}
console.log(sumarFlecha(3));
console.log(sumarFlecha(7, 40));

function mostrarMensajess(mensaje: string): void{
    console.log("Registro del sistema: " + mensaje);
}
mostrarMensajess("Ingreso autorizado correctamente");