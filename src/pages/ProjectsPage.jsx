import ProjectCard from "../components/projects/ProjectCard";
import { proyectos } from "../data/proyectos";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function ProjectsPage() {
  useScrollToTop();

  return (
    <div id="page-proyectos" className="page visible">
      <section id="proyectos">
        <span className="section-tag">// proyectos</span>
        <h2 className="section-title">Lo que he construido.</h2>

        <div className="projects-grid" id="projects-grid">
          {!proyectos?.length ? (
            <div className="empty-state" style={{ gridColumn: "1/-1" }}>
              <div className="empty-icon">🚀</div>
              <p>
                Aún no hay proyectos. Agrégalos en <code>src/data/proyectos.js</code>.
              </p>
            </div>
          ) : (
            proyectos.map((p) => (
              <ProjectCard key={`${p.titulo}-${p.github}`} proyecto={p} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
