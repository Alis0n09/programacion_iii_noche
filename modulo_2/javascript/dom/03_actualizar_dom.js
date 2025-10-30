const mensaje=document.getElementById("mensaje");
mensaje.textContent="Actualizado desde los JS";
mensaje.style.colot ="red";

const link=document.getElementById("link")
link.setAttribute("href", "https://www.google.com");
link.classList.add("boton");
link.textContent="Ir a google"