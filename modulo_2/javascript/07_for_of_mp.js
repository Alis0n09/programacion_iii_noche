console.log("CICLO FOR OF EN JAVASCRIPT");

const nombres = ["Guardia Luis", "Residente Ana", "Visitante Carlos", "Admin María"];
for (const nombre of nombres) {
    console.log("Ingresando usuario:", nombre);
}

const nombre = "Alivida";
for (const letra of nombre) {
    console.log("Letra del código:", letra);
}   

numeros = [1,2,3,4,5,6,7,8,9,10];
mayor = 0;
for (const numero of numeros) {
    if (numero > mayor) {
        mayor = numero;
    }
}
console.log("El mayor número de acceso es: ", mayor);

const persona ={
    nombre: "Visitante Juan",
    edad: 28,
    ciudad: "Quito"
}
for (const clave in persona) {
    console.log("Dato", clave, ":", persona[clave]);
}

const libro = {
    titulo: "Registro de Ingreso",
    autor: "Sistema Alivida",
    año: 2024,
    categoria: "Control de Acceso"
};
suma_claves = 0;
for (const clave in libro) {
    suma_claves++;
}
console.log("El registro tiene ", suma_claves, "campos.");
