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
