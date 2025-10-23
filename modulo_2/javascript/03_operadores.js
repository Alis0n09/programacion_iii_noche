console.log("OPERADORES ARITMETICOS EN JAVASCRIPT");

const numero1 = 70;
const numero2 = 5;
const suma = numero1 + numero2;
console.log(`${numero1} ${numero2} =${suma}`);

const resta = numero1 - numero2;
console.log(`${numero1} - ${numero2} =${resta}`);

const multiplicacion = numero1 * numero2;
console.log(`${numero1} * ${numero2} =${multiplicacion}`);  

const division = numero1 / numero2;
console.log(`${numero1} / ${numero2} =${division}`);

const modulo = numero1 % numero2;
console.log(`${numero1} % ${numero2} =${modulo}`);

const resultado = numero1 ** numero2;
console.log(`${numero1} ** ${numero2} =${resultado}`);

console.log("OPERADORES DE COMPARACION EN JAVASCRIPT");
const numero3 = "64";
const numero4 = 64

console.log(`Igualdad Debil ${numero3} == ${numero4} =${numero3==numero4}`);
console.log(`Igualdad estricta ${numero3} === ${numero4} =${numero3===numero4}`);
console.log(`Desigualdad Debil ${numero3} != ${numero4} =${numero3!=numero4}`);
console.log(`Desigualdad estricta ${numero3} !== ${numero4} =${numero3!==numero4}`);
console.log(`Mayor que ${numero3} > ${numero4} =${numero3>numero4}`);
console.log(`Menor que ${numero3} < ${numero4} =${numero3<numero4}`);
console.log(`Mayor o igual que ${numero3} >= ${numero4} =${numero3>=numero4}`);
console.log(`Menor o igual que ${numero3} <= ${numero4} =${numero3<=numero4}`);

console.log("OPERADORES LOGICOS EN JAVASCRIPT");
console.log(`AND "Y"( ${numero3} >= ${numero4} && ${numero3} <= ${numero4})=${numero3>=numero_4 && numero3<=numero4}`);
console.log(`OR "O"( ${numero3} ==$${numero4} || ${numero3} != ${numero4})=${numero3==numero4 || numero3!=numero4}`);
console.log(` ! "Negacion" !(${numero3} == ${numero4}) = ${!(numero3==numero4)}`);
console.log(`${numero3!=numero4 && numero3>=numero4 }`);
console.log(`${numero3>numero4 && numero3===numero4 }`);
console.log(`${numero3!=numero4 || numero3>=numero4 }`);
console.log(`${numero3>numero4 || numero3>=numero4} }`);
console.log(`!(${numero3} > ${numero4}) = ${!(numero3>numero4)}`);

console.log(`${numero3!=numero4 && numero3>=numero4 &&numero3!==numero4}`);
console.log(`${numero3>numero4 || numero3>=numero4 || numero3===numero4}`);
