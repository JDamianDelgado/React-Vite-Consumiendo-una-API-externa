import { Link } from "react-router-dom";

export function NavbBar() {
  return (
    <nav className="navBar">
      <Link className="Link" to={"/"}>
        Home
      </Link>
      <Link className="Link" to="/personajes">
        Personajes
      </Link>
      <Link className="Link" to="/planetas">
        Planetas
      </Link>
    </nav>
  );
}
