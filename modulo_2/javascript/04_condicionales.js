console.log("CONDICIONALES EN JAVASCRIPT");
console.log("Estructura IF");

let temperatura = 30;

if(temperatura > 25){
    console.log("Hace calor");
}

console.log("Estructura IF ELSE");
const password = "admin123";
if(password == "admin123"){
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}
console.log("Estructura IF ELSE IF");
const edad = 19;
const tieneLicencia = true;
if(edad > 18 && tieneLicencia){
    if(tieneLicencia == true){
        console.log("Puedes conducir");
        } else {
            console.log("Es menor de edad");
        }
    }else{
        console.log("Necesitas una licencia para conducir");
    }

if(edad>18 && tieneLicencia){
        console.log("Puede conducir");
}else if(edad>18){
        console.log("Necesita licencia");
}else{
    console.log("Es menor de edad");
}

console.log("Condicional SWITCH");
const dia = "lunes";
switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernnes":
        console.log("Dia laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Dia no valido");
}
