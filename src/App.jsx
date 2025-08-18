import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Productos from "./components/Productos";
import ProductosDestacados from "./components/ProductosDestacados";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        {/* Página de inicio */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProductosDestacados />
            </>
          }
        />

        {/* Página de productos */}
        <Route path="/productos" element={<Productos />} />

        {/* Página de nosotros */}
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

