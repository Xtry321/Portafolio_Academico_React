import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const NAV_OFFSET = 72;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const goToSection = (id) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    window.history.replaceState(null, "", `/#${id}`);
    scrollToSection(id);
  };

  return (
    <nav>
      <Link className="nav-brand" to="/" onClick={closeMenu}>
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
            className={({ isActive }) => (isActive && !location.hash ? "active" : "")}
            onClick={closeMenu}
            end
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <a
            id="nav-sobre-mi"
            href="/#sobre-mi"
            className={location.pathname === "/" && location.hash === "#sobre-mi" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              goToSection("sobre-mi");
            }}
          >
            Sobre mí
          </a>
        </li>
        <li>
          <NavLink
            id="nav-proyectos"
            to="/proyectos"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink
            id="nav-cuaderno"
            to="/cuaderno"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Cuaderno
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
