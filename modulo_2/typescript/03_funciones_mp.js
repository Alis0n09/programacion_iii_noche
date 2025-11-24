function saludar() {
    return "Bienvenido al Sistema de Acceso de Alivida";
}
console.log(saludar());
function suma() {
    return 5 + 3;
}
console.log("Total de ingresos registrados: " + suma());
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
console.log("Vehículos en turno mañana y tarde: " + sumar(10, 15));
function sumarOpcional(numero1, numero2) {
    return numero1 + (numero2 ? numero2 : 15);
}
console.log(sumarOpcional(9));
console.log(sumarOpcional(25, 14));
const sumarFlecha = (num1, num2) => {
    return num1 + (num2 || 20);
};
console.log(sumarFlecha(3));
console.log(sumarFlecha(7, 40));
function mostrarMensaje(mensaje) {
    console.log("Registro del sistema: " + mensaje);
}
mostrarMensaje("Ingreso autorizado correctamente");
