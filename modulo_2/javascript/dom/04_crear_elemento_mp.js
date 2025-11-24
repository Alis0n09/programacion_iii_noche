let parrafo = null;
const btnCrear = document.getElementById('crear');
const contenedor = document.getElementById('contenedor');
btnCrear.addEventListener('click',()=>
{
    parrafo = document.createElement('p');
    parrafo.textContent = 'Acceso registrado correctamente';
    parrafo.classList.add('parrafo')
    contenedor.appendChild(parrafo);
});

const btnEliminar = document.getElementById('eliminar');
btnEliminar.addEventListener('click',()=>
{
    if (parrafo) parrafo.remove();
    const parrafos = document
        .getElementsByClassName('parrafo');
    Array.from(parrafos)
        .forEach(parrafo => parrafo.remove());
});

const btnDobleClick = document.getElementById('btnDobleClick');
btnDobleClick.addEventListener('dblclick', () =>{
    alert("Doble click detectado en el Panel de Acceso");
});

const inputText = document.getElementById('nombre');
inputText.addEventListener('input', (e) =>{
    console.log('Escribiendo nombre de visitante: ', e.target.value);
});

const form = document.getElementById('formulario');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert(`Acceso enviado para: ${inputText.value}`);
});

inputText.addEventListener('keydown',(e) =>
{
    console.log('Tecla presionada en el campo de visitante:', e.key);    
});

window.addEventListener('scroll',() =>
{
    console.log('Scroll detectado en la página del sistema de acceso');
});
