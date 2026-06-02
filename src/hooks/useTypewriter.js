import { useEffect, useState } from "react";

const PHRASES = [
  "Desarrollador de software en formación.",
  "Apasionado por la tecnología y la innovación.",
  "Creando soluciones digitales funcionales.",
  "Desarrollo web con enfoque moderno."
];

export function useTypewriter() {
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
