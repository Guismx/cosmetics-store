
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let intervalId;

// Função para mostrar o slide atual
function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'block';
}

// Função para avançar para o próximo slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

// Função para voltar para o slide anterior
function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

// Iniciar o carrossel automaticamente
function startCarousel() {
  intervalId = setInterval(nextSlide, 1000); // Alterar o slide a cada 3 segundos
}

// Parar o carrossel automático
function stopCarousel() {
  clearInterval(intervalId);
}

// Mostrar o primeiro slide ao carregar a página
showSlide(slideIndex);

// Iniciar o carrossel automaticamente ao carregar a página
startCarousel();

