import BibliographyList from "./BibliographyList";
import NoteContent from "./NoteContent";

export default function WeekContent({ semana }) {
  return (
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
          <NoteContent notas={semana.notas} />
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
          <BibliographyList referencias={semana.bibliografia} />
        </div>
      </div>
    </>
  );
}
