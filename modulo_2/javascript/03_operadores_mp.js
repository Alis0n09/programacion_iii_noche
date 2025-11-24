console.log("OPERADORES ARITMETICOS - CONTROL DE ACCESO ALIVIDA");

const vehiculosIngresaron = 70;
const vehiculosSalieron = 5;

const totalActual = vehiculosIngresaron - vehiculosSalieron;
console.log(`Vehículos dentro: ${vehiculosIngresaron} - ${vehiculosSalieron} = ${totalActual}`);

const capacidadMaxima = 300;
console.log(`Vehículos actuales (${totalActual}) + capacidad de salida (${vehiculosSalieron}) = ${totalActual + vehiculosSalieron}`);

console.log(`Multiplicación (Guardias * Turnos) 4 * 2 = ${4 * 2}`);
console.log(`División (Casas por calle) 120 / 6 = ${120 / 6}`);

console.log(`Módulo (placas terminación par/impar) 1235 % 2 = ${1235 % 2}`);

console.log(`Exponente (Control de torres de vigilancia) 2 ** 3 = ${2 ** 3}`);


console.log("\nOPERADORES DE COMPARACION - ACCESO DE VISITANTES");

const casaRegistrada = "64";
const casaDigitada = 64;

console.log(`Igualdad débil ${casaRegistrada} == ${casaDigitada} = ${casaRegistrada == casaDigitada}`);
console.log(`Igualdad estricta ${casaRegistrada} === ${casaDigitada} = ${casaRegistrada === casaDigitada}`);

console.log(`Desigualdad débil ${casaRegistrada} != ${casaDigitada} = ${casaRegistrada != casaDigitada}`);
console.log(`Desigualdad estricta ${casaRegistrada} !== ${casaDigitada} = ${casaRegistrada !== casaDigitada}`);

console.log(`Mayor que ${casaRegistrada} > ${casaDigitada} = ${casaRegistrada > casaDigitada}`);
console.log(`Menor que ${casaRegistrada} < ${casaDigitada} = ${casaRegistrada < casaDigitada}`);

console.log(`Mayor o igual que ${casaRegistrada} >= ${casaDigitada} = ${casaRegistrada >= casaDigitada}`);
console.log(`Menor o igual que ${casaRegistrada} <= ${casaDigitada} = ${casaRegistrada <= casaDigitada}`);


console.log("\nOPERADORES LOGICOS - VALIDACIÓN DE ACCESO");

const placaVisitante = "PCW1234";
const placaPermitida = "PCW1234";

const tieneCita = true;
const tieneMultas = false;

console.log(`AND - visitante autorizado y cita activa: ${placaVisitante === placaPermitida && tieneCita}`);

console.log(`OR - coincide placa o tiene cita: ${placaVisitante === placaPermitida || tieneCita}`);

console.log(`Negación - ¿NO tiene multas?: ${!tieneMultas}`);

console.log(`(Placa incorrecta && cita activa): ${placaVisitante !== placaPermitida && tieneCita}`);
console.log(`(Placa coincide && NO tiene cita): ${placaVisitante === placaPermitida && !tieneCita}`);

console.log(`(Placa incorrecta || cita activa): ${placaVisitante !== placaPermitida || tieneCita}`);

console.log(`Negación de comparación ( !(64 > 64) ): ${!(casaRegistrada > casaDigitada)}`);

console.log(`Verificación completa (placa≠permitida && cita && sin multas): ${placaVisitante !== placaPermitida && tieneCita && !tieneMultas}`);

console.log(`Validación OR múltiple (placa=True || cita=True || multas=False): ${placaVisitante === placaPermitida || tieneCita || !tieneMultas}`);
