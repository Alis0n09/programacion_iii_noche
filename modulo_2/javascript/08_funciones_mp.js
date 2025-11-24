console.log("FUNCIONES EN JAVASCRIPT");
console.log("Funcion simple");

function saludar(){
    console.log("Hola, bienvenido al Sistema de Control de Acceso Alivida");
}

saludar();

console.log("Funcion con parametros");

function sumar(a, b){
    return a + b;
}
console.log("Total de vehículos registrados: ", sumar(5, 10));

console.log("FUNCION FLECHA");
const functionFlecha = () => {
    console.log("Registro realizado mediante función flecha");
}
functionFlecha();

const multiplicacion = (x, y) => {
    return x * y;
};
console.log("Guardias por turnos asignados: ", multiplicacion(4, 5));

console.log("Funcion retorno directo");
const cuadrado = x => x * x;
console.log("Verificación cuadrada del código: ", cuadrado(6));

console.log("Funcion con valor por defecto");
function division(a, b=2){
    return a / b;
}
console.log("Promedio de ingresos: ", division(10));
console.log("Promedio de ingresos ajustado: ", division(10, 5));
