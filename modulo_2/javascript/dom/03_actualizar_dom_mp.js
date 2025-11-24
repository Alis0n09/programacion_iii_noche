const mensaje = document.getElementById("mensaje");
mensaje.textContent = "Actualizado: Sistema de Control Alivida";
mensaje.style.color = "red";

const link = document.getElementById("link");
link.setAttribute("href", "https://alivida.com/acceso");
link.classList.add("boton");
link.textContent = "Ir al Panel de Acceso";
