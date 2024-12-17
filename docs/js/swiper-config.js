<!-- Incluye la librería Swiper (puedes agregar esto en tu archivo HTML o en un archivo JS externo) -->
<!-- Asegúrate de tener las librerías de Swiper antes de este código -->
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

<script>
  // Inicialización de Swiper para la sección de testimonios
  var swiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1, // Cuántos testimonios se muestran por vez
    spaceBetween: 20, // Espacio entre las tarjetas
    navigation: {
      nextEl: '.swiper-button-next', // Botón de siguiente
      prevEl: '.swiper-button-prev', // Botón de anterior
    },
    pagination: {
      el: '.testimonial-swiper-pagination', // Elemento de paginación
      clickable: true, // Permite hacer clic en los puntos de paginación
    },
    breakpoints: {
      // Configuración para pantallas grandes
      768: {
        slidesPerView: 2, // 2 testimonios en pantallas medianas
      },
      1024: {
        slidesPerView: 3, // 3 testimonios en pantallas grandes
      },
    },
  });
</script>
