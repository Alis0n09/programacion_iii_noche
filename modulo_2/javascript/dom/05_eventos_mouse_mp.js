const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'lightgreen';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'darkgreen';
});
caja.addEventListener('click', () => {
    alert("¡Registro de acceso detectado!");
});
