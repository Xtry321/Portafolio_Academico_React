import { Link } from "react-router-dom";
import { useTypewriter } from "../hooks/useTypewriter";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function HomePage() {
  const typewriterText = useTypewriter();
  useScrollToTop();

  return (
    <div id="page-home" className="page visible">
      <section id="home">
        <div className="home-bg">
          <div className="grid-overlay"></div>
          <div className="home-bg-glow-blue"></div>
          <div className="home-bg-glow-green"></div>
        </div>

        <span className="home-label">Portafolio · Ingeniería de Sistemas</span>

        <h1 className="home-name">
          José Eduardo
          <br />
          <span>Araujo Champi</span>
        </h1>

        <div className="typewriter-wrap">
          <span id="typewriter-text">{typewriterText}</span>
          <span className="cursor"></span>
        </div>

        <div className="home-cta">
          <Link className="btn-primary" to="/sobre-mi">
            Conocerme más
          </Link>
          <Link className="btn-outline" to="/proyectos">
            Ver proyectos
          </Link>
        </div>
      </section>
    </div>
  );
}
