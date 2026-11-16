// curso que se muestra por ahora el de programación
const idCurso = 1;

//ponemos elnombre del curso q se compro
const curso = JSON.parse(localStorage.getItem("cursoSeleccionado"));
if (curso) {
  document.getElementById("nombre-curso").textContent = curso.nombre;
}
//pedimos los modulos al php
fetch("php/listar_modulos.php?id_curso=" + idCurso)
    .then(respuesta => respuesta.json())
.then(modulos => {
    const lista = document.getElementById("lista-modulos");

    // armar un bloque por cada modulo
    modulos.forEach(modulo => {
        const item = document.createElement("li");
        item.innerHTML=`
        <h4> ${modulo.nombre} </h4>
        <p>${modulo.contenido}</p>
        `;

        // agregamos el videosi existe
        if (modulo.video) {
            item.innerHTML += `<iframe src="${modulo.video}" title="${modulo.nombre}" allowfullscreen></iframe>`;
        }

        lista.appendChild(item);
    });
});


//preguntas de avaluacion 
const preguntas = [
    {
        pregunta: "¿Qué es una variable?",
        opciones: ["Un error del programa", "Un espacio para guardar un dato", "Un tipo de computador"],
        correcta: 1
    },
    {
        pregunta: "¿Qué tipo de dato es el número 25?",
        opciones: ["Texto (string)", "Número (number)", "Verdadero o falso (boolean)"],
        correcta: 1
    },
    {
        pregunta: "¿Qué valores puede tener un dato booleano?",
        opciones: ["Verdadero o falso", "Solo números", "Cualquier texto"],
        correcta: 0
    },
    {
        pregunta: "¿Para qué sirve if?",
        opciones: ["Para repetir algo muchas veces", "Para guardar un dato", "Para tomar una decisión según una condición"],
        correcta: 2
    },

     {
        pregunta: "¿Qué estructura repite instrucciones varias veces?",
        opciones: ["for", "if", "else"],
        correcta: 0
    }

];
// mostramos las preguntas en el formulario
const formulario = document.getElementById("evaluacion");

preguntas.forEach((item, i) => {
  let html = `<div class="pregunta"><p>${i + 1}. ${item.pregunta}</p>`;

  // una opción por cada respuesta
  item.opciones.forEach((opcion, j) => {
    html += `<label><input type="radio" name="p${i}" value="${j}"> ${opcion}</label>`;
  });

  html += `</div>`;
  formulario.innerHTML += html;
});
// calificamos al presionar el botón
document.getElementById("btn-calificar").addEventListener("click", () => {
  let aciertos = 0;

  // revisamos pregunta por pregunta
  preguntas.forEach((item, i) => {
    const marcada = document.querySelector(`input[name="p${i}"]:checked`);
    if (marcada && Number(marcada.value) === item.correcta) {
      aciertos++;
    }
  });

  // mostramos la nota
  const mensaje = aciertos >= 3 ? "¡Aprobaste!" : "Repasa los videos e inténtalo de nuevo.";
  document.getElementById("resultado").textContent = `Tu nota: ${aciertos} de ${preguntas.length}. ${mensaje}`;
});

// mostramos la evaluación al presionar el botón
document.getElementById("btn-presentar").addEventListener("click", () => {
  document.getElementById("seccion-evaluacion").hidden = false;
  document.getElementById("btn-presentar").hidden = true;
});