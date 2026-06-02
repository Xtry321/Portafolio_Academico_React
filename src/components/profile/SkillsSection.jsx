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
            <h3>Frameworks y herramientas</h3>
          </header>
          <div className="skill-tags skill-tags-lg">
            {perfil.frameworks.map((item) => (
              <span className="tag tag-lg tag-primary" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="profile-card">
          <header className="profile-card-header">
            <ProfileIcon name="users" className="profile-card-icon" />
            <h3>Soft skills</h3>
          </header>
          <div className="skill-tags skill-tags-lg">
            {perfil.softSkills.map((item) => (
              <span className="tag tag-lg" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
