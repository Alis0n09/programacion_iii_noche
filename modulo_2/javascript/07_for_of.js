console.log("CICLO FOR OF EN JAVASCRIPT");

const nombres = ["Ana", "Luis", "Carlos", "María"];
for (const nombre of nombres) {
    console.log("Holii ", nombre);
}

const nombre = "Fernando";
for (const letra of nombre) {
    console.log("Letra",letra);
}   

numeros = [1,2,3,4,5,6,7,8,9,10];
mayor = 0;
for (const numero of numeros) {
    if (numero > mayor) {
        mayor = numero;
    }
}
console.log("El numero mayor es: ", mayor);

const persona ={
    nombre: "Ana",
    edad: 28,
    ciudad: "Quito"
}
for (const clave in persona) {
    console.log("Clave", clave, ":", persona[clave]);
}

const libro = {
    titulo: "La Caperucita Roja",
    autor: "Charles Perrault",
    año: 1697,
    categoria: "Cuento Infantil"
};
suma_claves = 0;
for (const clave in libro) {
    suma_claves++;
}
console.log("El objeto libro tiene ", suma_claves, "claves.");
