import { useEffect, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import { proyectos } from "../data/proyectos";
import { semanas } from "../data/semanas";

const PHRASES = [
  "Desarrollador de software en formación.",
  "Apasionado por la tecnología y la innovación.",
  "Creando soluciones digitales funcionales.",
  "Desarrollo web con enfoque moderno."
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderNotas(text) {
  if (!text) return "";

  const IMG_RE = /^\[img:\s*([^\]|]+?)(?:\|\s*([^\]]*))?\]\s*$/;
  const CODE_START = /^~~~\s*(\w*)$/;
  const CODE_END = /^~~~\s*$/;

  const lines = text.split("\n");
  const segments = [];
  let textBuf = [];
  let codeBuf = null;
  let codeLang = "";

  lines.forEach((line) => {
    if (codeBuf !== null) {
      if (CODE_END.test(line)) {
        if (textBuf.length) {
          segments.push({ type: "text", content: textBuf.join("\n") });
          textBuf = [];
        }
        segments.push({ type: "code", content: codeBuf.join("\n"), lang: codeLang });
        codeBuf = null;
        codeLang = "";
      } else {
        codeBuf.push(line);
      }
      return;
    }

    const codeMatch = line.match(CODE_START);
    if (codeMatch) {
      if (textBuf.length) {
        segments.push({ type: "text", content: textBuf.join("\n") });
        textBuf = [];
      }
      codeBuf = [];
      codeLang = codeMatch[1] || "";
      return;
    }

    const imgMatch = line.match(IMG_RE);
    if (imgMatch) {
      if (textBuf.length) {
        segments.push({ type: "text", content: textBuf.join("\n") });
        textBuf = [];
      }
      segments.push({
        type: "img",
        content: imgMatch[1].trim(),
        caption: imgMatch[2] ? imgMatch[2].trim() : imgMatch[1].trim().split("/").pop()
      });
      return;
    }

    textBuf.push(line);
  });

  if (textBuf.length) segments.push({ type: "text", content: textBuf.join("\n") });

  return segments
    .map((seg) => {
      if (seg.type === "img") {
        return `
          <figure class="note-figure">
            <img src="${seg.content}" alt="${escapeHtml(seg.caption)}" loading="lazy" />
            <figcaption>${escapeHtml(seg.caption)}</figcaption>
          </figure>`;
      }

      if (seg.type === "code") {
        const label = seg.lang ? `<span class="code-lang">${escapeHtml(seg.lang)}</span>` : "";
        return `<div class="code-block">${label}<pre><code>${escapeHtml(seg.content)}</code></pre></div>`;
      }

      let html = escapeHtml(seg.content);
      html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
      html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
      html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
      html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
      html = html.replace(/^[-•]\s+(.+)$/gm, "<li>$1</li>");
      html = html.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m.replace(/\n/g, "")}</ul>`);
      html = html.replace(/(<\/h2>|<\/h3>|<\/h4>)\n/g, "$1");
      html = html.replace(/\n(<h2>|<h3>|<h4>)/g, "$1");
      html = html.replace(/(<\/ul>)\n/g, "$1");
      html = html.replace(/\n(<ul>)/g, "$1");
      html = html.replace(/\n/g, "<br>");
      return html;
    })
    .join("");
}

function useTypewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIdx];
    let timeout;

    if (!deleting) {
      if (charIdx === current.length) {
        timeout = window.setTimeout(() => setDeleting(true), 1900);
      } else {
        timeout = window.setTimeout(() => setCharIdx((v) => v + 1), 55);
      }
    } else if (charIdx === 0) {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((v) => (v + 1) % PHRASES.length);
      }, 420);
    } else {
      timeout = window.setTimeout(() => setCharIdx((v) => v - 1), 30);
    }

    return () => window.clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return PHRASES[phraseIdx].slice(0, charIdx);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link className="nav-brand" to="/" onClick={() => setMenuOpen(false)}>
          Portafolio Académico
        </Link>

        <div className="nav-toggle" aria-label="Abrir menú" onClick={() => setMenuOpen((v) => !v)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <NavLink
              id="nav-home"
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
              end
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              id="nav-sobre-mi"
              to="/sobre-mi"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              id="nav-proyectos"
              to="/proyectos"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              id="nav-cuaderno"
              to="/cuaderno"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Cuaderno
            </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/cuaderno" element={<NotebookPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

function HomePage() {
  const typewriterText = useTypewriter();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="page-home" className="page visible">
      <section id="home">
        <div className="home-bg">
          <div className="grid-overlay"></div>
          <div className="home-bg-glow-blue"></div>
          <div className="home-bg-glow-green"></div>
        </div>

        <span className="home-label">Portafolio · Ingeniería de Sistemas</span>

        <h1 className="home-name">
          José Eduardo
          <br />
          <span>Araujo Champi</span>
        </h1>

        <div className="typewriter-wrap">
          <span id="typewriter-text">{typewriterText}</span>
          <span className="cursor"></span>
        </div>

        <div className="home-cta">
          <Link className="btn-primary" to="/sobre-mi">
            Conocerme más
          </Link>
          <Link className="btn-outline" to="/proyectos">
            Ver proyectos
          </Link>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
                Aún no hay proyectos. Agrégalos en <code>data/proyectos.js</code>.
              </p>
            </div>
          ) : (
            proyectos.map((p) => (
              <div
                key={`${p.titulo}-${p.github}`}
                className="project-card"
                style={p.destacado ? { borderColor: "rgba(164,201,255,0.45)" } : undefined}
              >
                <div className="project-card-top">
                  <div className="project-icon">{p.icono || "💻"}</div>
                  <a
                    className="project-link-btn"
                    href={p.github && p.github !== "#" ? p.github : "#"}
                    target={p.github && p.github !== "#" ? "_blank" : undefined}
                    rel={p.github && p.github !== "#" ? "noopener" : undefined}
                  >
                    {p.github && p.github !== "#" ? "GitHub ↗" : "Próximamente"}
                  </a>
                </div>
                <h3>{p.titulo}</h3>
                <p>{p.descripcion}</p>
                <div className="project-tech">
                  {(p.tecnologias || []).map((tech) => (
                    <span key={`${p.titulo}-${tech}`} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

function NotebookPage() {
  const [semanaActiva, setSemanaActiva] = useState(0);
  const semana = semanas?.[semanaActiva];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="page-cuaderno" className="page visible">
      <section id="cuaderno">
        <span className="section-tag">// cuaderno de apuntes</span>
        <h2 className="section-title">Mis anotaciones.</h2>

        <div className="notebook-layout">
          <div className="weeks-sidebar">
            <div className="weeks-header">Semanas</div>
            <ul className="weeks-list" id="weeks-list">
              {!semanas?.length ? (
                <li style={{ padding: "1rem 1.25rem", fontSize: ".8rem", color: "var(--outline)" }}>
                  Sin semanas. Edita <code>data/semanas.js</code>.
                </li>
              ) : (
                semanas.map((s, i) => (
                  <li
                    key={s.titulo}
                    className={`week-item${i === semanaActiva ? " active" : ""}`}
                    onClick={() => setSemanaActiva(i)}
                  >
                    <div>{s.titulo}</div>
                    <div className="week-date">{s.fecha || ""}</div>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="notebook-content" id="notebook-content">
            {!semanas?.length || !semana ? (
              <div className="empty-state">
                <div className="empty-icon">📓</div>
                <p>
                  Agrega tus semanas en <code>data/semanas.js</code> para empezar.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: ".25rem" }}>
                  <div className="notebook-week-title">{semana.titulo}</div>
                  <div className="notebook-week-meta">{semana.fecha || "Sin fecha"}</div>
                </div>

                <div className="notebook-panel">
                  <div className="panel-header">
                    <h3>📝 Apuntes</h3>
                  </div>
                  <div className="panel-body">
                    <div
                      className="note-content"
                      dangerouslySetInnerHTML={{ __html: renderNotas(semana.notas || "") }}
                    />
                  </div>
                </div>

                <div className="notebook-panel">
                  <div className="panel-header">
                    <h3>💭 Reflexión semanal</h3>
                  </div>
                  <div className="panel-body">
                    <div className="reflection-text">{semana.reflexion || "Sin reflexión registrada."}</div>
                  </div>
                </div>

                <div className="notebook-panel">
                  <div className="panel-header">
                    <h3>📚 Bibliografía</h3>
                  </div>
                  <div className="panel-body">
                    {(semana.bibliografia || []).length ? (
                      (semana.bibliografia || []).map((r, i) => {
                        const isUrl = r.startsWith("http");
                        return (
                          <div key={`${semana.titulo}-ref-${i}`} className="bib-entry">
                            <span className="bib-num">{i + 1}</span>
                            <span className="bib-text">
                              {isUrl ? (
                                <a className="bib-link" href={r} target="_blank" rel="noopener">
                                  {r}
                                </a>
                              ) : (
                                r
                              )}
                            </span>
                          </div>
                        );
                      })
                    ) : (
                      <p style={{ fontSize: ".85rem", color: "var(--outline)" }}>
                        Sin bibliografía registrada.
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
