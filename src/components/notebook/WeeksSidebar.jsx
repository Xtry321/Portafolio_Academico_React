export default function WeeksSidebar({ semanas, semanaActiva, onSelect }) {
  return (
    <div className="weeks-sidebar">
      <div className="weeks-header">Semanas</div>
      <ul className="weeks-list" id="weeks-list">
        {!semanas?.length ? (
          <li style={{ padding: "1rem 1.25rem", fontSize: ".8rem", color: "var(--outline)" }}>
            Sin semanas. Edita <code>src/data/semanas.js</code>.
          </li>
        ) : (
          semanas.map((s, i) => (
            <li
              key={s.titulo}
              className={`week-item${i === semanaActiva ? " active" : ""}`}
              onClick={() => onSelect(i)}
            >
              <div>{s.titulo}</div>
              <div className="week-date">{s.fecha || ""}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
