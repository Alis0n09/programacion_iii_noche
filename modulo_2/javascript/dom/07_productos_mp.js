const productos = [
  { nombre: "Tarjeta RFID", descripcion: "Acceso vehicular", precio: 5, existencia: 120, ubicacion: "Garita Principal" },
  { nombre: "Sticker Vehicular", descripcion: "Identificación de residentes", precio: 3, existencia: 200, ubicacion: "Oficina Administrativa" },
  { nombre: "Lector Biométrico", descripcion: "Control peatonal", precio: 250, existencia: 4, ubicacion: "Ingreso Peatonal" },
  { nombre: "Cámara de Seguridad", descripcion: "Alta resolución", precio: 150, existencia: 15, ubicacion: "Perímetro" },
  { nombre: "Conos de Seguridad", descripcion: "Señalización", precio: 10, existencia: 50, ubicacion: "Bodega Externa" },
  { nombre: "Control Remoto", descripcion: "Apertura de portón", precio: 20, existencia: 35, ubicacion: "Garita 2" },
  { nombre: "Radio Comunicador", descripcion: "Comunicación interna", precio: 45, existencia: 18, ubicacion: "Garita Principal" },
  { nombre: "Linterna táctica", descripcion: "Uso nocturno", precio: 30, existencia: 12, ubicacion: "Garita Nocturna" },
  { nombre: "Chaleco Reflectivo", descripcion: "Guardias", precio: 25, existencia: 22, ubicacion: "Bodega Interna" },
  { nombre: "Brazo Levadizo", descripcion: "Acceso vehicular", precio: 900, existencia: 2, ubicacion: "Entrada Vehicular" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
