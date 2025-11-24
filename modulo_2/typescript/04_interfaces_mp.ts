interface Usuario {
    id: number;
    nombre: string;
    correo: string
}

const usuario5: Usuario = {
    id: 5,
    nombre: "Guardia Pedro",
    correo: "pedro.garita@alivida.com"
}
console.log(usuario5);
console.log(usuario5.nombre);

interface Producto {
    id: number;
    nombre: string;
    precio?: number;
}
const producto1: Producto = {
    id: 1,
    nombre: "Tarjeta de Acceso",
    precio: 15
}
const producto2: Producto = {
    id: 2,
    nombre: "Sticker Vehicular",
    
}
console.log(producto1);
console.log(producto2);
