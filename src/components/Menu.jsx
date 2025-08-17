import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-lizfarma.png";

const Elementos = [
  { texto: "Inicio", url: "/inicio" },
  { texto: "Productos", url: "/productos" },
  { texto: "Nosotros", url: "/nosotros" },
  { texto: "Ubicación", url: "/ubicacion" },
];

function MenuItem({ texto, enlace }) {
  return (
    <Link 
      to={enlace} 
      className="block px-4 py-1 text-lg text-white hover:text-teal-600 font-bold hover:bg-white rounded-bl-2xl"
    >
      {texto}
    </Link>
  );
}

export default function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    console.log(menuAbierto ? "Menú abierto" : "Menú cerrado");
  }, [menuAbierto]);

  return (
    <nav className="bg-teal-400 shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="LizFarma Logo" className="h-18 w-auto cursor-pointer"/>
          <span className="text-white font-bold text-2xl hover:text-amber-300 cursor-pointer">
            LizFarma
          </span>
        </div>

        {/* Botón móvil */}
        <button 
          className="bg-white text-teal-400 font-bold px-3 py-1 border border-white rounded shadow-md hover:bg-teal-400 hover:text-white md:hidden transition"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "Cerrar" : "Menu"}
        </button>

        {/* Menú horizontal (desktop) */}
        <div className="hidden md:flex space-x-5">
          {Elementos.map((elemento, index) => (
            <MenuItem key={index} texto={elemento.texto} enlace={elemento.url} />
          ))}
        </div>
      </div>

      {/* Menú vertical (móvil) */}
      {menuAbierto && (
        <div className="md:hidden flex flex-col px-6 bg-teal-400 shadow-inner text-center font-bold animate-slideDown">
          {Elementos.map((elemento, index) => (
            <MenuItem key={index} texto={elemento.texto} enlace={elemento.url} />
          ))}
        </div>
      )}
    </nav>
  );
}
