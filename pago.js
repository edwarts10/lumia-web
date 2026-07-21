document.addEventListener("DOMContentLoaded", () => {
  const curso = JSON.parse(localStorage.getItem("cursoSeleccionado"));

  if (curso) {
    document.getElementById("curso-nombre").textContent = curso.nombre;
    document.getElementById("resumen-nombre").textContent = curso.nombre;
    document.getElementById("resumen-precio").textContent = `$${curso.precio} COP`;
    document.getElementById("total-precio").textContent = `$${curso.precio} COP`;
  }
});

function finalizarPago() {
  const curso = JSON.parse(localStorage.getItem("cursoSeleccionado"));

  fetch("php/guardar_inscripcion.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      curso: curso.nombre,
      precio: curso.precio
    })
  })
    .then(respuesta => respuesta.json())
    .then(datos => {
      if (datos.exito) {
        window.location.href = "pago exitoso.html";
      } else {
        alert("Error al guardar: " + datos.error);
      }
    });
}