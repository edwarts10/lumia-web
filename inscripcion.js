// Muestra el curso y precio real en el resumen apenas carga la página
document.addEventListener("DOMContentLoaded", () => {
  const curso = JSON.parse(localStorage.getItem("cursoSeleccionado"));

  if (!curso) {
    alert("No se ha seleccionado ningún curso. Por favor, vuelve a la página de cursos.");
    window.location.href = "cursos.html";
    return;
  }

  document.getElementById("resumen-curso").textContent = curso.nombre;
  document.getElementById("resumen-precio").textContent = curso.precio;
});

// Guarda nombre y correo, y pasa a la página de pago
document.getElementById("formPago").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  let curso = JSON.parse(localStorage.getItem("cursoSeleccionado"));
  if (!curso) {
    alert("No se ha seleccionado ningún curso. Por favor, vuelve a la página de cursos.");
    window.location.href = "cursos.html";
    return;
  }

  curso.estudianteNombre = nombre;
  curso.correo = correo;

  localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));

  window.location.href = "pago.html";
});