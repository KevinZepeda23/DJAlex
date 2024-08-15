// JavaScript para cualquier animación o interactividad adicional
document.addEventListener("DOMContentLoaded", function() {
    console.log("Landing page script loaded.");

    // Selecciona los elementos 'text' y 'dj-name'
    const textElement = document.querySelector('.hero .text');
    const djNameElement = document.querySelector('.hero .dj-name');

    // Función para agregar el efecto de neón
    function addNeonEffect(element) {
        element.classList.add('neon-effect');
    }

    // Función para quitar el efecto de neón
    function removeNeonEffect(element) {
        element.classList.remove('neon-effect');
    }

    // Aplicar el efecto de neón al pasar el ratón
    textElement.addEventListener('mouseover', () => addNeonEffect(textElement));
    textElement.addEventListener('mouseout', () => removeNeonEffect(textElement));

    djNameElement.addEventListener('mouseover', () => addNeonEffect(djNameElement));
    djNameElement.addEventListener('mouseout', () => removeNeonEffect(djNameElement));
});
