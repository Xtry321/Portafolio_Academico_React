export default function ProjectCard({ proyecto }) {
  const { titulo, descripcion, tecnologias, icono, github, destacado } = proyecto;
  const hasGithub = github && github !== "#";

  return (
    <div
      className="project-card"
      style={destacado ? { borderColor: "rgba(164,201,255,0.45)" } : undefined}
    >
      <div className="project-card-top">
        <div className="project-icon">{icono || "💻"}</div>
        <a
          className="project-link-btn"
          href={hasGithub ? github : "#"}
          target={hasGithub ? "_blank" : undefined}
          rel={hasGithub ? "noopener" : undefined}
        >
          {hasGithub ? "GitHub ↗" : "Próximamente"}
        </a>
      </div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <div className="project-tech">
        {(tecnologias || []).map((tech) => (
          <span key={`${titulo}-${tech}`} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
