function saludar() {
    return "¡Hola desde TypeScript!";
}
console.log(saludar());
function suma() {
    return 5 + 3;
}
console.log("La suma es: " + suma());
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
console.log("La suma de 10 y 15 es: " + sumar(10, 15));
function sumarOpcional(numero1, numero2) {
    return numero1 + (numero2 ? numero2 : 15);
}
console.log(sumarOpcional(10));
console.log(sumarOpcional(10, 25));
var sumarFlecha = function (num1, num2) {
    return num1 + (num2 || 20);
};
console.log(sumarFlecha(5));
console.log(sumarFlecha(5, 30));
function mostrarMensaje(mensaje) {
    console.log("Mensaje: " + mensaje);
}
mostrarMensaje("¡Este es un mensaje de prueba!");
