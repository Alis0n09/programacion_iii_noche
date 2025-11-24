console.log("CONDICIONALES EN JAVASCRIPT");
console.log("Control de Acceso - Urbanización Alivida");

let temperatura = 30;

if(temperatura > 25){
    console.log("La garita reporta clima cálido");
}

console.log("Validación de contraseña de guardia");
const password = "admin123";
if(password == "admin123"){
    console.log("Acceso al sistema concedido");
} else {
    console.log("Acceso al sistema denegado");
}
console.log("Verificación de ingreso de visitante");
const edad = 19;
const tieneLicencia = true;
if(edad > 18 && tieneLicencia){
    if(tieneLicencia == true){
        console.log("Visitante autorizado a ingresar en vehículo");
        } else {
            console.log("Visitante menor de edad");
        }
    }else{
        console.log("Visitante requiere licencia válida");
    }

if(edad>18 && tieneLicencia){
        console.log("Ingreso vehicular permitido");
}else if(edad>18){
        console.log("No puede ingresar sin licencia");
}else{
    console.log("Ingreso peatonal permitido, menor de edad");
}

console.log("Turno del guardia según el día");
const dia = "lunes";
switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernnes":
        console.log("Turno laboral en garita");
        break;
    case "sabado":
    case "domingo":
        console.log("Turno de fin de semana");
        break;
    default:
        console.log("Día no registrado");
}
