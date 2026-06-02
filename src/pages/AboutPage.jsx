import { useScrollToTop } from "../hooks/useScrollToTop";

export default function AboutPage() {
  useScrollToTop();

  return (
    <div id="page-sobre-mi" className="page visible">
      <section id="sobre-mi">
        <span className="section-tag">// sobre mí</span>
        <h2 className="section-title">
          El desarrollador
          <br />
          detrás del código.
        </h2>

        <div className="about-grid">
          <div className="about-sidebar">
            <div className="skill-group">
              <h4>Frontend</h4>
              <div className="skill-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Backend</h4>
              <div className="skill-tags">
                <span className="tag">PHP</span>
                <span className="tag">Laravel</span>
                <span className="tag">MySQL</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Herramientas</h4>
              <div className="skill-tags">
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Otros</h4>
              <div className="skill-tags">
                <span className="tag">Ciberseguridad</span>
                <span className="tag">Inglés B1</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <p>
              Soy <strong>José Eduardo Araujo Champi</strong>, estudiante de Ingeniería de Sistemas
              apasionado por el desarrollo de software y la creación de soluciones tecnológicas innovadoras.
            </p>
            <p>
              Me interesa especialmente el desarrollo web y backend, por lo que he fortalecido mis
              conocimientos en tecnologías como HTML, CSS, JavaScript, PHP, Laravel y gestión de bases de
              datos MySQL.
            </p>
            <p>
              Además, cuento con conocimientos en Git, desarrollo responsivo y fundamentos de ciberseguridad,
              complementados con un nivel de inglés intermedio que me permite acceder a documentación y
              recursos técnicos internacionales.
            </p>
            <p>
              Realicé prácticas en la <span className="hl">Oficina de Tecnología de la UNCP</span>, donde
              reforcé mis habilidades técnicas y de trabajo en equipo en entornos reales.
            </p>
            <p>
              Actualmente, continúo desarrollando proyectos y ampliando mis conocimientos con el objetivo de
              crecer profesionalmente en el área de desarrollo de software y contribuir con soluciones
              eficientes, modernas y funcionales.
            </p>
            <div className="highlight-card">
              <p>
                "Mi objetivo es crecer como desarrollador y construir soluciones que aporten
                <strong> valor real</strong> a quienes las usan."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
