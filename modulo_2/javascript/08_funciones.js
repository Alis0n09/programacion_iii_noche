console.log("FUNCIONES EN JAVASCRIPT");
console.log("Funcion simple");

function saludar(){
    console.log("Hola, bienvenido a programación Tercer Semestre");
}

saludar();

console.log("Funcion con parametros");

function sumar(a, b){
    return a + b;
}
console.log("La suma es: ", sumar(5, 10));

console.log("FUNCION FLECHA");
const functionFlecha = () => {
    console.log("Esta es una función flecha");
}
functionFlecha();

const multiplicacion = (x, y) => {
    return x * y;
};
console.log("La multiplicacion es: ", multiplicacion(4, 5));

consoke.log("Funcion retorno directo");
const cuadrado = x => x * x;
console.log("El cuadrado es: ", cuadrado(6));

console.log("Funcion con valor por defecto");
function division(a, b=2){
    return a / b;
}
console.log("La division es: ", division(10));
console.log("La division es: ", division(10, 5));