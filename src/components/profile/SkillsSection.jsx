import { perfil } from "../../data/perfil";
import ProfileIcon from "../ui/ProfileIcon";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="profile-section">
      <span className="section-tag">// stack</span>
      <h2 className="section-title">Stack de habilidades.</h2>

      <div className="profile-cards-3">
        <article className="profile-card">
          <header className="profile-card-header">
            <ProfileIcon name="code" className="profile-card-icon" />
            <h3>Lenguajes</h3>
          </header>
          <ul className="skill-bars">
            {perfil.lenguajes.map((lang) => (
              <li key={lang.nombre}>
                <div className="skill-bar-label">
                  <span>{lang.nombre}</span>
                  <span>{lang.nivel}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${lang.nivel}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="profile-card">
          <header className="profile-card-header">
            <ProfileIcon name="layers" className="profile-card-icon" />
            <h3>Frameworks, herramientas y soft skills</h3>
          </header>
          <div className="skill-tags-stack">
            <div className="skill-tags-group">
              <p className="skill-tags-group-label">Frameworks y herramientas</p>
              <div className="skill-tags skill-tags-lg">
                {perfil.frameworks.map((item) => (
                  <span className="tag tag-lg tag-primary" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-tags-group">
              <p className="skill-tags-group-label">Soft skills</p>
              <div className="skill-tags skill-tags-lg">
                {perfil.softSkills.map((item) => (
                  <span className="tag tag-lg" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
