var cadena_caracteres: string = "Sistema de Control de Acceso Alivida";
console.log(cadena_caracteres);

var variable_numerica: number = 42;
console.log(variable_numerica);

var booleana: boolean = true;
console.log(booleana);

var cualquiera: any = "Visitante sin datos definidos";
console.log(cualquiera);
cualquiera = 1001;

var edad: number = 30
if (edad >= 18) {
    console.log("Visitante autorizado para ingreso vehicular");
}else{
    console.log("Visitante solo puede ingresar como peatón");
}
