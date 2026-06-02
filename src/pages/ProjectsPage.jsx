import ProjectCard from "../components/projects/ProjectCard";
import ScrollReveal from "../components/ui/ScrollReveal";
import { proyectos } from "../data/proyectos";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function ProjectsPage() {
  useScrollToTop();

  return (
    <div id="page-proyectos" className="page visible">
      <section id="proyectos">
        <ScrollReveal>
          <span className="section-tag">// proyectos</span>
          <h2 className="section-title">Lo que he construido.</h2>
        </ScrollReveal>

        <div className="projects-grid" id="projects-grid">
          {!proyectos?.length ? (
            <div className="empty-state" style={{ gridColumn: "1/-1" }}>
              <div className="empty-icon">🚀</div>
              <p>
                Aún no hay proyectos. Agrégalos en <code>src/data/proyectos.js</code>.
              </p>
            </div>
          ) : (
            proyectos.map((p, i) => (
              <ScrollReveal key={`${p.titulo}-${p.github}`} delay={i * 90}>
                <ProjectCard proyecto={p} />
              </ScrollReveal>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
