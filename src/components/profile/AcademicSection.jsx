import { perfil } from "../../data/perfil";
import ProfileIcon from "../ui/ProfileIcon";

export default function AcademicSection() {
  return (
    <section id="sobre-mi" className="profile-section">
      <span className="section-tag">// académico y profesional</span>
      <h2 className="section-title">
        Formación
        <br />
        y certificaciones.
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

        <article className="profile-card">
          <header className="profile-card-header">
            <ProfileIcon name="award" className="profile-card-icon" />
            <h3>Certificaciones</h3>
          </header>
          <ul className="timeline-list">
            {perfil.certificaciones.map((item) => (
              <li key={`${item.nombre}-${item.fecha}`} className="timeline-item">
                <time className="timeline-date" dateTime={item.fecha}>
                  {item.fecha}
                </time>
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-body timeline-body--cert">
                  <strong>{item.nombre}</strong>
                  <span>{item.emisor}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
