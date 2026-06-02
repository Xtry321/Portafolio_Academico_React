import { useState } from "react";
import WeeksSidebar from "../components/notebook/WeeksSidebar";
import WeekContent from "../components/notebook/WeekContent";
import { semanas } from "../data/semanas";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function NotebookPage() {
  const [semanaActiva, setSemanaActiva] = useState(0);
  const semana = semanas?.[semanaActiva];

  useScrollToTop();

  return (
    <div id="page-cuaderno" className="page visible">
      <section id="cuaderno">
        <span className="section-tag">// cuaderno de apuntes</span>
        <h2 className="section-title">Mis anotaciones.</h2>

        <div className="notebook-layout">
          <WeeksSidebar
            semanas={semanas}
            semanaActiva={semanaActiva}
            onSelect={setSemanaActiva}
          />

          <div className="notebook-content" id="notebook-content">
            {!semanas?.length || !semana ? (
              <div className="empty-state">
                <div className="empty-icon">📓</div>
                <p>
                  Agrega tus semanas en <code>src/data/semanas.js</code> para empezar.
                </p>
              </div>
            ) : (
              <WeekContent semana={semana} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
