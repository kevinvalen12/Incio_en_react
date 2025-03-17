import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React es extremadamente popular",
    "Hace que sea muy fácil el desarrollo de increíbles y complejas interfaces de usuario",
    "Es muy poderosa y flexible",
    "Tiene un sistema muy versátil",
  ],
  [
    "Componentes, JSX y Propiedades",
    "Los estados",
    "Los Hooks (e.g., useEffect())",
    "Renderizado Dinámico",
  ],
  [
    "Web Oficial (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (Desarrolla aplicaciones móviles con React)",
  ],
  [
    "JavaScript Vanilla requiere de una programación imperativa",
    "En la programación imperativa defines todos los pasos necesarios para llegar al objetivo",
    "Por otro lado, una de las características principales de React es su programación declarativa",
    "Con React, tu defines el objetivo y React averigua como llegar a ese objetivo",
  ],
  [
    "haciendo el reto de agregar otro boton para que despliege esta informacion",
    "esta es la segunada vez que hago el reto pero este es para subir al repositoria",
    "esto es basado en el curso de Picando Código",
    "y si cumpli el reto",
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>
            Utilizamos la librería React para el desarrollo de esta interfaz de
            usuario web.
          </p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            ¿Por qué React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Características Principales
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Recursos Relacionados
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Reto de React
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
