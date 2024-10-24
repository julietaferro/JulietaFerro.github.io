const carouselImage = document.getElementById('carouselImage');
const images = [
    'images/imagen1.png',
    'images/imagen2.jpg',
    'images/imagen3.jpg',
    'images/imagen4.png',
    'images/imagen5.png',
    'images/imagen6.jpg',
    'images/imagen7.png'
];
let currentIndex = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


function updateCarousel() {
    carouselImage.src = images[currentIndex];
}


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});


updateCarousel();


function enviarContacto() {
    const name = document.getElementById('name').value.trim();
    const petName = document.getElementById('petName').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const formMessage = document.getElementById('formMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

   
    if (!name || !petName || !address || !email || !phone) {
        formMessage.textContent = 'Por favor, complete todos los campos.';
        formMessage.style.color = 'red';
        return;
    }

    
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Por favor, ingrese un email válido.';
        formMessage.style.color = 'red';
        return;
    }

    if (!phoneRegex.test(phone)) {
        formMessage.textContent = 'Por favor, ingrese un número de teléfono válido (10 dígitos).';
        formMessage.style.color = 'red';
        return;
    }

    
    formMessage.textContent = '¡Contacto guardado con éxito!';
    formMessage.style.color = 'green';

    
    document.getElementById('contactForm').reset();
}
function reservarTurno(formId) {
    const form = document.getElementById(formId);
    const dateInput = form.querySelector('input[type="date"]');
    const successMessage = form.querySelector('.success-message');

    if (dateInput.value) {
        
        
        successMessage.textContent = "¡Reservado con éxito!";
        successMessage.style.display = 'block';

        
        dateInput.value = '';

        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    } else {
        alert("Por favor, selecciona una fecha antes de reservar.");
    }
}