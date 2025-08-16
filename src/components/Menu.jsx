import { useState, useEffect } from "react";
import logo from "../assets/logo-lizfarma.png";

const Elementos = [
  { texto: "Inicio", url: "/" },
  { texto: "Productos", url: "/" },
  { texto: "Nosotros", url: "/" },
  { texto: "Ubicación", url: "/" },
];

function MenuItem({ texto, enlace }) {
  return (
    <a
      href={enlace}
      className="block px-4 py-1 text-lg text-white hover:text-teal-600 font-bold hover:bg-gray-50 rounded-bl-2xl"
    >
      {texto}
    </a>
  );
}

export default function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(0);

  //useEffect
  useEffect(() => {
    console.log(menuAbierto ? "Menú abierto" : "Menú cerrado");
  }, [menuAbierto]);

  return (
    <nav className="bg-teal-400 shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-5">
            <span className="text-white font-bold text-3xl hover:text-amber-300 cursor-pointer">LizFarma</span>
            <img src={logo} alt="LizFarma Logo" className="h-22 w-auto m-0 cursor-pointer" />
        </div>

        {/* Botón simple para móviles */}
        <button className="bg-white text-teal-400 font-bold px-3 py-1 border border-white rounded shadow-md hover:bg-teal-400 hover:text-white md:hidden transition"
          onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? "Cerrar" : "Menu"}
        </button>

        {/* Menú horizontal (desktop) */}
        <div className="hidden md:flex space-x-5">
          {Elementos.map((elemento, index) => (
            <MenuItem key={index} texto={elemento.texto} enlace={elemento.url}/>
          ))}
        </div>
      </div>

      {/* Menú vertical (móvil) */}
      {menuAbierto && (
        <div className="md:hidden flex flex-col px-6 bg-teal-400 shadow-inner text-center font-bold">
          {Elementos.map((elemento, index) => (
            <MenuItem key={index} texto={elemento.texto} enlace={elemento.url}/>
          ))}
        </div>
      )}
    </nav>
  );
}
