
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Productos from "./components/Productos";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-teal-400">
      <Menu/>
      <Banner/>
      <Productos/>
      <Footer/>
    </div>
  );
}
