export default function BibliographyList({ referencias = [] }) {
  if (!referencias.length) {
    return (
      <p style={{ fontSize: ".85rem", color: "var(--outline)" }}>Sin bibliografía registrada.</p>
    );
  }

  return referencias.map((r, i) => {
    const isUrl = r.startsWith("http");
    return (
      <div key={`ref-${i}`} className="bib-entry">
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
  });
}
