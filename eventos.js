const miDiv = document.getElementById('miDiv');
const miBoton = document.getElementById('miBoton');

miDiv.addEventListener('click', () => {
    alert('¡Hola! Soy el div');
});

miBoton.addEventListener('click', (event) => {
    event.stopPropagation(); 
    alert('¡Hola!');
});