console.log("VARIABLES EN JAVASCRIPT - CONTROL DE ACCESO");

var mensajeIngreso = "Registro de acceso iniciado";
var estadoSistema = "Sistema operativo y listo para validar accesos";

console.log(mensajeIngreso);
console.log(`${mensajeIngreso} - ${estadoSistema} - Hora: ${4+5}`);

let numeroDeCasas = 120;
const URBANIZACION = "Alivida";

console.log("Número de casas:", numeroDeCasas, "Nombre:", URBANIZACION);


console.log("TIPO DE DATOS EN JAVASCRIPT");

var nombreVisitante = "Carlos Pérez";
console.log("String:", typeof(nombreVisitante));

var numeroCasa = 25;
console.log("Tipo numérico:", typeof(numeroCasa));

var accesoPermitido = true;
console.log("Tipo booleano:", typeof(accesoPermitido));

var sinRegistro = undefined;
console.log("Tipo indefinido:", typeof(sinRegistro));

var registroNulo = null;
console.log("Tipo nulo:", typeof(registroNulo));

var idGuardia = Symbol("guardia_id");
console.log("Tipo símbolo:", typeof(idGuardia));


const visitante = {
    nombre: "María López",
    motivoVisita: "Entrega",
    casaDestino: "Casa 14B",
};

console.log(visitante);
console.log("Visitante:", visitante.nombre);
console.log("Casa destino:", visitante.casaDestino);
