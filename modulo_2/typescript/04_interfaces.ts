interface Usuario {
    id: number;
    nombre: string;
    correo: string
}

const usuario0: Usuario = {
    id: 1,
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com"
}

console.log(usuario0);
console.log(usuario0.nombre);

interface Producto {
    id: number;
    nombre: string;
    precio?: number;
}
const producto0: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 1500
}
const producto1: Producto = {
    id: 2,
    nombre: "Smartphone",
    
}
console.log(producto1);
console.log(producto2);