import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Personajes } from "./pages/Personajes";
import { Planetas } from "./pages/Planetas";
import "./index.css";
import { Home } from "./pages/Home";
import { NavbBar } from "./components/NavBar";
function App() {
  return (
    <div className="contenedorHome">
      <NavbBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/planetas" element={<Planetas />} />
      </Routes>
    </div>
  );
}

export default App;
