import { renderNotas } from "../../utils/notebookParser";

export default function NoteContent({ notas }) {
  return (
    <div
      className="note-content"
      dangerouslySetInnerHTML={{ __html: renderNotas(notas || "") }}
    />
  );
}
