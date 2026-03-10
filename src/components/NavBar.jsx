import { NavLink } from "react-router-dom";

export function NavbBar() {
  return (
    <header className="topBar">
      <nav className="navBar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link activeLink" : "Link"
          }
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link activeLink" : "Link"
          }
          to="/personajes"
        >
          Personajes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Link activeLink" : "Link"
          }
          to="/planetas"
        >
          Planetas
        </NavLink>
      </nav>
    </header>
  );
}
