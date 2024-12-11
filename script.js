// Script para activar el carrusel
let slideIndex = 0;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

showSlides(slideIndex);

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mostrar el mensaje de confirmación
    document.getElementById('confirmation-message').style.display = 'block';
    
    // Limpiar el formulario
    document.getElementById('reservation-form').reset();
});
// Obtener el botón del menú y el contenedor del menú
const menuToggle = document.getElementById('.nav-toggle');
const navList = document.getElementById('nav-list');

// Añadir un evento para escuchar el clic en el menú
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');  // Alternar la clase 'show' para mostrar u ocultar el menú
});

