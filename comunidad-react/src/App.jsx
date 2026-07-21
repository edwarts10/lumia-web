import { useState } from "react";
import "./App.css";

// Lista de concursos. Hoy tiene 1
const concursos = [
  {
    id: 1,
    titulo: "Diseño de Interfaces: Crea la app del futuro",
    categoria: "UX/UI",
    premio: "600$ en premios",
    cierre: "1/8/2025",
    estado: "Abierto",
  },
];
// Lista de proyectos..
const proyectos = [
  {
    id: 1,
    titulo: "Internet lecture",
    descripcion: "App educativa para estudiantes ",
    autor: "Lumia",
  },
];
// Preguntas del foro 
const preguntasIniciales = [];

// Componente: una sola tarjeta de concurso.
function ConcursoCard({ concurso }) {
  return (
    <div className="tarjeta-concurso">
      <span className="estado-badge">Estado: {concurso.estado}</span>
      <h3>{concurso.titulo}</h3>
      <p className="categoria">Categoría: {concurso.categoria}</p>
      <p>{concurso.premio}</p>
      <p>Cierra: {concurso.cierre}</p>
      <button>Entrar</button>
    </div>
  );
}
// Componente: una sola tarjeta de proyecto.
function ProyectoCard({ proyecto }) {
  return (
    <div className="tarjeta-proyecto">
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <p className="autor">Por: {proyecto.autor}</p>
    </div>
  );
}
// Componente: el foro completo campo para preguntar + lista de preguntas.
function Foro() {
  // Estado: lista de preguntas ya publicadas
  const [preguntas, setPreguntas] = useState(preguntasIniciales);
  // Estado: lo que el usuario está escribiendo ahora mismo
  const [nuevaPregunta, setNuevaPregunta] = useState("");

  function manejarPublicar() {
    if (nuevaPregunta.trim() === "") return; // no publicar vacío

    const pregunta = {
      id: Date.now(), // número único basado en la hora actual
      texto: nuevaPregunta,
    };

    setPreguntas([...preguntas, pregunta]); // agrega la nueva a la lista
    setNuevaPregunta(""); // limpia el campo de texto
  }

  return (
    <div>
      <h2>Foro</h2>

      <input
        type="text"
        placeholder="Escribe tu pregunta..."
        value={nuevaPregunta}
        onChange={(e) => setNuevaPregunta(e.target.value)}
      />
      <button onClick={manejarPublicar}>Publicar</button>

      <ul>
        {preguntas.map((pregunta) => (
          <li key={pregunta.id}>{pregunta.texto}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Comunidad Lumia</h1>

      <h2>Concursos</h2>
      <div className="lista-concursos">
        {concursos.map((concurso) => (
          <ConcursoCard key={concurso.id} concurso={concurso} />
        ))}
      </div>
      <h2>Proyectos</h2>
      <div className="lista-proyectos">
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
      <Foro />
    </div>
  );
  
}

export default App;