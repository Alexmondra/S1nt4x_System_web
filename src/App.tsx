import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./styles_globals/App.css";
//import "./index.css";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contactanos from "./pages/Contactanos";

function App() {
  return (
    <Router>
      {}
      <Menu />

      {}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/about" element={<Nosotros />} />
        <Route path="/contact" element={<Contactanos />} />
      </Routes>

      {}
      <footer>
        <p>© 2025 Mi Empresa - Todos los derechos reservados</p>
      </footer>
    </Router>
  );
}

export default App;
