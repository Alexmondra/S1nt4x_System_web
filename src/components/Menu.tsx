import { Link } from "react-router-dom";
import "./menu.css"; // (O Navbar.module.css, si usas CSS modules)

function Menu() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <Link to="/about">Nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contáctanos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
