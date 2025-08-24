import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
}


