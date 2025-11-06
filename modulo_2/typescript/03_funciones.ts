function saludar(): string{
    return "¡Hola desde TypeScript!";
}

console.log(saludar());

function suma(): number{
    return 5 + 3;
}
console.log("La suma es: " + suma());

function sumar(numero1: number, numero2: number): number{
    return numero1 + numero2;
}
console.log("La suma de 10 y 15 es: " + sumar(10, 15));

function sumarOpcional(numero1: number, numero2?: number): number{
    return numero1 +(numero2 ? numero2 : 15);
}
console.log(sumarOpcional(9));
console.log(sumarOpcional(25, 14));

const sumarFlecha = (num1: number, num2?: number): number => {
    return num1 + (num2 || 20);
}
console.log(sumarFlecha(3));
console.log(sumarFlecha(7, 40));

function mostrarMensaje(mensaje: string): void{
    console.log("Mensaje: " + mensaje);
}
mostrarMensaje("¡Este es un mensaje de prueba!");