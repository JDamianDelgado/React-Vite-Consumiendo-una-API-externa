import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Personajes } from "./pages/Personajes";
import { Planetas } from "./pages/Planetas";
import { NavbBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="appShell">
      <NavbBar />
      <main className="appContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/planetas" element={<Planetas />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
