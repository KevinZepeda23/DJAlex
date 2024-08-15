// Añadir scroll suave a los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
        alert('¡Mensaje enviado con éxito!');
    }, 1000);
});
