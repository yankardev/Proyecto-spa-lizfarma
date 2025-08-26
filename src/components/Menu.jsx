import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-lizfarma.png";

// Array de objetos para los enlaces de nav
const menuItems = [
  { texto: "Inicio", url: "/" },
  { texto: "Productos", url: "/productos" },
  { texto: "Nosotros", url: "/nosotros" },
  { texto: "Ubicación", url: "/ubicacion" },
  //{ texto: "Carrito", url: "/carrito" },
];

export default function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  // Efecto: cerrar menú móvil cuando cambia la ruta
  useEffect(() => {setMenuAbierto(false)}, [location.pathname]);

  return (
    <nav className="bg-teal-600 shadow-md" aria-label="Navegación principal">
      <div className="flex items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo de LizFarma" className="h-16 w-auto cursor-pointer hover:scale-125"/>
          <span className="text-white font-extrabold text-5xl hover:text-amber-300">
            LizFarma
          </span>
        </NavLink>

        {/* oculto en escritorio, visible en pantallas pequeñas.*/}
        <button type="button" 
        className="md:hidden bg-white text-teal-600 font-bold px-3 py-1 border border-white rounded shadow-md hover:bg-teal-500 hover:text-white transition"
        onClick={() => setMenuAbierto(!menuAbierto)}>
        {menuAbierto ? "Cerrar" : "Menú"}
        </button>

        {/*solo visible en escritorio.*/ }
        <ul className="hidden md:flex gap-5 font-bold text-white">
          {menuItems.map((item) => (
            <li key={item.url}>
              <NavLink to={item.url} end={item.url === "/"}
                className={({ isActive }) => isActive? "text-amber-300 border-b-2 border-amber-300": "hover:text-amber-200"}>
                {item.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
          {/*Menú móvil condicional */}
      {menuAbierto && (
        <div className="md:hidden bg-teal-500 px-6 py-2 text-center font-bold text-white">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.url}>
                <NavLink to={item.url} end={item.url === "/"}
                  className={({ isActive }) => isActive? "block text-amber-300": "block hover:text-amber-200"}
                  onClick={() => setMenuAbierto(false)}>
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
