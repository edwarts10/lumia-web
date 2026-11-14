import { useState } from "react";
import "./App.css";

// ============================================================
// IMÁGENES
// Como los archivos están dentro de src/, se importan como
// variables (no como texto de ruta) para que Vite las procese.
// ============================================================
import logoLumia from "./logo limua color.png";
import logoBlanco from "./logo lumia blanco.png";
import imagenConcursoUXUI from "./Categoría UXUI.png";
import imagenCursoWeb from "./Categoría Desarrollo Web.png";
import imagenProyectoDestacado from "./Mask group.png";
import imagenLandingPages from "./creador de landing.png";
import imagenEquipo from "./equipo.png";
import fondoFooter from "./fondo footer-03.png";
import iconoWhatsapp from "./LOGOS REDES-04.svg";
import iconoInstagram from "./LOGOS REDES-05.svg";
import iconoYoutube from "./LOGOS REDES-06.svg";
import iconoFacebook from "./LOGOS REDES-07.svg";
import iconoTwitter from "./LOGOS REDES-08.svg";
import fondoConcursos from "./fondo 1-01.png";
import fondoProyectos from "./fondo lumia 2-02.png";
// ============================================================

// DATOS (arreglos). Cada uno tiene 1 elemento hoy, listos para
// agregar más simplemente sumando otro objeto.
// ============================================================
const concursos = [
  {
    id: 1,
    titulo: "Diseño de Interfaces: Crea la app del futuro",
    categoria: "UX/UI",
    premio: "600$ en premios",
    cierre: "1/8/2025",
    estado: "Abierto",
    imagen: imagenConcursoUXUI,
  },
   {
    id: 2,
    titulo: "Desarrollo Web: Construye tu mini plataforma educativa",
    categoria: "Desarrollo Web",
    premio: "600$ en premios",
    cierre: "1/8/2025",
    estado: "Abierto",
    imagen: imagenCursoWeb,
  },
   {
    id: 3,
    titulo: "Motion & Video: Explica un concepto educativo en 1 minuto",
    categoria: "Multimedia",
    premio: "600$ en premios",
    cierre: "1/8/2025",
    estado: "Abierto",
    imagen: imagenConcursoUXUI,
  },
];

// Se deja guardado para cuando conectemos el formulario de
// "subir proyecto" a la base de datos. Por ahora no se usa.
const proyectos = [
  {
    id: 1,
    titulo: "Internet lecture",
    descripcion: "App educativa para estudiantes",
    autor: "Lumia",
    imagen: imagenProyectoDestacado,
  },
];

const preguntasIniciales = [];

// ============================================================
// Componente: Navbar
// Encabezado con logo + menú en forma de píldora.
// ============================================================
function Navbar() {
  return (
    <div className="barra-superior">
    <header className="navbar">
    <img src={logoBlanco} alt="Logo Lumia" className="logo-lumia" />
      <nav className="nav-menu">
        <a href="http://127.0.0.1:5500/index.html">Inicio</a>
        <a href="http://127.0.0.1:5500/cursos.html">Cursos</a>
        <a href="http://localhost:5173/" className="activo">Comunidad</a>
        <a href="http://127.0.0.1:5500/contacto.html">Contacto</a>
        <a href="http://127.0.0.1:5500/inicio sesion.html">Entrar</a>
      </nav>
    </header>
    </div>  
  );
}

// ============================================================
// Componente: ConcursoCard
// Tarjeta de concurso: imagen + badge arriba, info blanca abajo.
// ============================================================
function ConcursoCard({ concurso }) {
  return (
    <div className="tarjeta-concurso">
      <div
        className="imagen-concurso"
        style={{ backgroundImage: `url(${concurso.imagen})` }}
      >
        <span className="estado-badge">Estado: {concurso.estado}</span>
      </div>

      <div className="info-concurso">
        <h3>{concurso.titulo}</h3>
        <p className="categoria">Categoría: {concurso.categoria}</p>
        <p className="premio">Premio: {concurso.premio}</p>
        <div className= "pie-concurso">
          <p className="premio">Cierre: {concurso.cierre}</p>
          <button>Entrar</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Componente: SeccionProyectos
// 3 bloques fijos con imagen de fondo (no usa .map(), porque en
// el diseño cada bloque tiene un rol visual distinto).
// ============================================================
function SeccionProyectos() {
  return (
    <div className="lista-proyectos">
      <div
        className="tarjeta-proyecto destacado"
        style={{ backgroundImage: `url(${imagenProyectoDestacado})` }}
      >
       
      </div>

      <div>
        <div
          className="tarjeta-proyecto banner"
          style={{ backgroundImage: `url(${imagenLandingPages})` }}
        >
          
        </div>
        {/*  foto del equipo trabajando */}
        <div className="tarjeta-proyecto equipo"
        style={{ backgroundImage: `url(${imagenEquipo})` }}
        ></div>
      </div>
    </div>
  );
}

// ============================================================
// Componente: Foro
// Campo controlado (useState) para escribir + lista de preguntas
// publicadas (también en useState).
// ============================================================
function Foro() {
  const [preguntas, setPreguntas] = useState(preguntasIniciales);
  const [nuevaPregunta, setNuevaPregunta] = useState("");

  function manejarPublicar() {
    if (nuevaPregunta.trim() === "") return;

    const pregunta = {
      id: Date.now(),
      texto: nuevaPregunta,
    };

    setPreguntas([...preguntas, pregunta]);
    setNuevaPregunta("");
  }

  return (
    <div className="foro">
      <h2>Foro</h2>
<div className="foro-campo ">
      <input
        type="text"
        placeholder="Escribe tu pregunta..."
        value={nuevaPregunta}
        onChange={(e) => setNuevaPregunta(e.target.value)}
      />
      <button onClick={manejarPublicar}>Publicar</button>
  </div>
      <ul className="foro-preguntas">
        {preguntas.map((pregunta) => (
          <li key={pregunta.id}>{pregunta.texto}</li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================
// Componente: Footer
// Pie de página con fondo degradado, logo, enlaces y redes.
// IMPORTANTE: esta función va aquí afuera, al mismo nivel que
// los demás componentes — NUNCA dentro del return de otro
// componente (ese fue el error de la versión anterior).
// ============================================================
function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${fondoFooter})` }}
    >
      <div className="footer-marca">
        <img src={logoLumia} alt="Lumia" className="footer-logo" />
        <span>Lumia 2025</span>
      </div>

      <ul className="footer-links">
        <li><a href="http://127.0.0.1:5500/politicas.html#condiciones">Condiciones de uso</a></li>
        <li><a href="http://127.0.0.1:5500/politicas.html#privacidad">Política de privacidad</a></li>
        <li><a href="http://127.0.0.1:5500/politicas.html#cookies">Políticas de cookies</a></li>
        <li><a href="http://127.0.0.1:5500/politicas.html#accesibilidad">Declaraciones de accesibilidad</a></li>
      </ul>

      <div className="footer-redes">
        <a href="#"><img src={iconoWhatsapp} alt="WhatsApp" /></a>
        <a href="#"><img src={iconoFacebook} alt="Facebook" /></a>
        <a href="#"><img src={iconoInstagram} alt="Instagram" /></a>
        <a href="#"><img src={iconoYoutube} alt="YouTube" /></a>
        <a href="#"><img src={iconoTwitter} alt="Twitter" /></a>
      </div>
    </footer>
  );
}

// ============================================================
// Componente raíz: App
// Solo arma el orden en que aparecen las secciones en pantalla.
// ============================================================
function App() {
  return (
    <div>
      <Navbar />

      <section className="seccion" style={{ backgroundImage: `url(${fondoConcursos})` }}>
        <h2>Concursos</h2>
        <div className="lista-concursos">
          {concursos.map((concurso) => (
            <ConcursoCard key={concurso.id} concurso={concurso} />
          ))}
        </div>
      </section>

      <section className="seccion" style={{ backgroundImage: `url(${fondoProyectos})` }}>
        <h2>Proyectos</h2>
        <SeccionProyectos />
      </section>

      <section className="seccion">
        <Foro />
      </section>

      <Footer />
    </div>
  );
}
  

export default App;