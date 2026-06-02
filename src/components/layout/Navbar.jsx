import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Sobre mí
          </NavLink>
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
