import { useState } from "react";
import { Link } from "react-router-dom";
import { perfil } from "../../data/perfil";
import { useTypewriter } from "../../hooks/useTypewriter";

export default function ProfileHero() {
  const typewriterText = useTypewriter();
  const [fotoError, setFotoError] = useState(false);

  return (
    <section id="inicio" className="profile-hero">
      <div className="home-bg profile-hero-bg">
        <div className="grid-overlay"></div>
        <div className="home-bg-glow-blue"></div>
        <div className="home-bg-glow-green"></div>
      </div>

      <div className="profile-hero-inner">
        <div className="profile-photo-wrap">
          {!fotoError && perfil.foto ? (
            <img
              className="profile-photo"
              src={perfil.foto}
              alt={perfil.nombre}
              onError={() => setFotoError(true)}
            />
          ) : (
            <div className="profile-photo profile-photo-fallback" aria-hidden="true">
              {perfil.iniciales}
            </div>
          )}
        </div>

        <div className="profile-hero-content">
          <span className="home-label">{perfil.rol}</span>

          <h1 className="profile-name">{perfil.nombre}</h1>

          <div className="typewriter-wrap profile-typewriter">
            <span id="typewriter-text">{typewriterText}</span>
            <span className="cursor"></span>
          </div>

          <div className="profile-bio">
            {perfil.bio.map((parrafo) => (
              <p key={parrafo.slice(0, 40)}>{parrafo}</p>
            ))}
          </div>

          <div className="highlight-card profile-quote">
            <p>"{perfil.cita}"</p>
          </div>

          <div className="home-cta profile-cta">
            <a className="btn-primary" href="#sobre-mi">
              Ver formación
            </a>
            <Link className="btn-outline" to="/proyectos">
              Ver proyectos
            </Link>
            {perfil.enlaces.github ? (
              <a
                className="btn-outline profile-icon-btn"
                href={perfil.enlaces.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
