const areaTouch = document.getElementById('areaTouch');
areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.backgroundColor = 'deeppink';
});
areaTouch.addEventListener('touchend', () => {
    areaTouch.style.backgroundColor = 'skyblue';
    alert("¡Tocaste el área touch!");
});