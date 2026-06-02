function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderNotas(text) {
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
