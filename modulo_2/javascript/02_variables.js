console.log("VARIABLES EN JAVASCRIPT");
var saludo1 = "Hola";
var saludo2 = "Hola de nuevo desde una variable";
console.log(saludo1);

console.log(saludo1 + " " + saludo2);
console.log(`${saludo1} ${saludo2} ${4+5}`);

let numero = 10;
const PI = 3.1416;
console.log(numero, PI);

console.log("TIPO DE DATOS EN JAVASCRIPT");
var nombre = "Juan";
console.log("String", typeof (nombre));
var tipo_numero = 252525;
console.log("Tipo numerico", typeof (tipo_numero));
var tipo_booleano = true;
console.log("Tipo booleano", typeof (tipo_booleano));
var tipo_indefinido= undefined;
console.log("Tipo indefinido", typeof (tipo_indefinido));
var tipo_nulo = null;
console.log("Tipo nulo", typeof (tipo_nulo));
var tipo_simbolo = Symbol("clave");
console.log("Tipo simbolo", typeof (tipo_simbolo));
var tipo_bigentero = 9007199254741991n;
console.log("Tipo bigentero", typeof (tipo_bigentero));

const persona = {
    nombre: "Ana",
    edad: 28,
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);