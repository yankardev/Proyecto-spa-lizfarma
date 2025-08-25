import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-lizfarma.png";

const menuItems = [
  { texto: "Inicio", url: "/" },
  { texto: "Productos", url: "/productos" },
  { texto: "Nosotros", url: "/nosotros" },
  { texto: "Ubicación", url: "/ubicacion" },
];

function MenuItem({ texto, enlace, onClick }) {
  const base = "block px-4 py-2 text-lg font-bold rounded-bl-2xl transition";
  return (
      <NavLink to={enlace} end={enlace === "/"} onClick={onClick} aria-label={texto}
        className={({ isActive }) => isActive?
         `${base} text-amber-300 bg-teal-400`: `${base} text-white hover:bg-teal-600`}>
        {texto}
      </NavLink>
  );
}

export default function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Hook del router: nos da la ruta actual (pathname)
  const location = useLocation();
  // Efecto: cada vez que cambia la ruta, cerramos el menú móvil
  useEffect(() => {setMenuAbierto(false);
}, [location.pathname]);

  // Alterna el estado del menú móvil (true/false)
  const toggleMenu = () => setMenuAbierto((v) => !v);
  return (
    <nav className="bg-teal-600 shadow-md" aria-label="Navegación principal">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Marca */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo de LizFarma"className="h-16 w-auto cursor-pointer"/>
          <span className="text-white font-extrabold text-3xl hover:text-amber-300 cursor-pointer">
            LizFarma
          </span>
        </div>

        {/* Botón hamburguesa: solo visible en móvil (md:hidden) */}
        <button type="button"
          className="md:hidden bg-white text-teal-600 font-bold px-3 py-1 border border-white rounded shadow-md hover:bg-teal-500 hover:text-white transition"
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          onClick={toggleMenu}>
          {menuAbierto ? "Cerrar" : "Menú"}
        </button>

        <ul className="hidden md:flex gap-5">
          {menuItems.map((item) => (<MenuItem key={item.texto} texto={item.texto} enlace={item.url} />))}
        </ul>
      </div>

      {/* Navegación en móvil: condicional según el estado */}
      <div id="menu-movil" className={`md:hidden px-6 bg-teal-400 shadow-inner text-center font-bold ${
          menuAbierto ? "block" : "hidden"}`}>
        <ul className="flex flex-col py-2">
          {menuItems.map((item) => (<MenuItem key={item.texto} texto={item.texto} enlace={item.url}
              // Al hacer click en un enlace móvil, cerramos el menú
              onClick={() => setMenuAbierto(false)}/>
          ))}
        </ul>
      </div>
    </nav>
  );
}
