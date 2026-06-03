import { perfil } from "../../data/perfil";
import ProfileIcon from "../ui/ProfileIcon";

export default function AcademicSection() {
  return (
    <section id="sobre-mi" className="profile-section">
      <span className="section-tag">// académico y profesional</span>
      <h2 className="section-title">
        Formación
        <br />
        y experiencia.
      </h2>

      <div className="profile-cards-2">
        <article className="profile-card">
          <header className="profile-card-header">
            <ProfileIcon name="graduation" className="profile-card-icon" />
            <h3>Formación</h3>
          </header>
          <ul className="profile-list">
            {perfil.formacion.map((item) => (
              <li key={`${item.titulo}-${item.institucion}`}>
                <strong>{item.titulo}</strong>
                <span>{item.institucion}</span>
                {item.descripcion ? (
                  <p className="profile-list-desc">{item.descripcion}</p>
                ) : null}
                <time>{item.periodo}</time>
              </li>
            ))}
          </ul>
        </article>

        <article id="experiencia" className="profile-card profile-card--scroll">
          <header className="profile-card-header">
            <ProfileIcon name="briefcase" className="profile-card-icon" />
            <h3>Experiencia</h3>
          </header>
          <ul className="timeline-list timeline-list--experience timeline-list--in-card">
            {perfil.experiencia.map((item) => (
              <li className="timeline-item" key={`${item.puesto}-${item.empresa}`}>
                <time className="timeline-date" dateTime={item.anio || undefined}>
                  {item.anio || item.periodo}
                </time>
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>
                <article className="timeline-body timeline-body--experience timeline-body--in-card">
                  <h4>{item.puesto}</h4>
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
        </article>
      </div>
    </section>
  );
}
