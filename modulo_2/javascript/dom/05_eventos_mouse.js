const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'pink';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'purple';
});
caja.addEventListener('click', () => {
    alert("!clickeaste la caja¡");
});