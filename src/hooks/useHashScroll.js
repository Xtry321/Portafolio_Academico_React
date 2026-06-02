import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET = 72;

export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const scroll = () => {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const timer = window.setTimeout(scroll, 80);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);
}
