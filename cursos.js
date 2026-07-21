document.querySelectorAll('.carrusel-container').forEach(container => {
  const carrusel = container.querySelector('.carrusel');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  
  let scrollAmount = 0;
  const scrollStep = 160;

  prevBtn.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - scrollStep, 0);
    carrusel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    carrusel.style.transform = `translateX(-${scrollAmount}px)`;
  });
});

// Comprar curso
function comprarCurso(nombre, precio) {
  if (!nombre || !precio) {
    alert("Hubo un error al seleccionar el curso. Intenta nuevamente.");
    return;
  }

  const curso = { nombre, precio };
  localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));
  window.location.href = "pago curso.html"; // Redirige a la página de datos de compra
}