import { perfil } from "../../data/perfil";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="profile-section">
      <span className="section-tag">// experiencia</span>
      <h2 className="section-title">Experiencia.</h2>

      <ul className="timeline-list timeline-list--experience">
        {perfil.experiencia.map((item) => (
          <li className="timeline-item" key={`${item.puesto}-${item.empresa}`}>
            <time className="timeline-date" dateTime={item.anio || undefined}>
              {item.anio || item.periodo}
            </time>
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-dot" />
            </div>
            <article className="timeline-body timeline-body--experience">
              <h3>{item.puesto}</h3>
              <p className="experience-meta">
                <span>{item.empresa}</span>
                {item.anio && item.periodo ? (
                  <>
                    <span className="experience-dot">·</span>
                    <span>{item.periodo}</span>
                  </>
                ) : null}
              </p>
              <ul>
                {item.tareas.map((tarea) => (
                  <li key={tarea}>{tarea}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
