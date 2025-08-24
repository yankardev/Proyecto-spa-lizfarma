import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-lizfarma.png";

const menuItems = [
  { texto: "Inicio", url: "/" },
  { texto: "Productos", url: "/productos" },
  { texto: "Nosotros", url: "/nosotros" },
  { texto: "Ubicación", url: "/ubicacion" },
];

// Ítem de menú reutilizable
function MenuItem({ texto, enlace, onClick }) {
  return (
    <li>
      <NavLink to={enlace} onClick={onClick} className={({ isActive }) =>
          ["block px-4 py-2 text-lg font-bold rounded-bl-2xl transition",
            "text-white hover:text-teal-600 hover:bg-white",
            isActive ? "text-amber-300  bg-teal-400" : "",
          ].join(" ")
        } aria-label={texto}>
        {texto}
      </NavLink>
    </li>
  );
}

export default function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Hook del router: nos da la ruta actual (pathname)
  const location = useLocation();
  // Efecto: cada vez que cambia la ruta, cerramos el menú móvil (mejor UX)
  useEffect(() => {
    setMenuAbierto(false);
  }, [location.pathname]);

  // Alterna el estado del menú móvil (true/false)
  const toggleMenu = () => setMenuAbierto((v) => !v);

  return (
    // <nav> semántico + etiqueta ARIA
    <nav className="bg-teal-400 shadow-md" aria-label="Navegación principal">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Marca */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de LizFarma"
            className="h-16 w-auto cursor-pointer" // Nota: Tailwind no tiene h-18 por defecto
            decoding="async"
          />
          <span className="text-white font-bold text-2xl hover:text-amber-300 cursor-pointer">
            LizFarma
          </span>
        </div>

        {/* Botón hamburguesa: solo visible en móvil (md:hidden) */}
        <button
          type="button"
          className="md:hidden bg-white text-teal-600 font-bold px-3 py-1 border border-white rounded shadow-md hover:bg-teal-500 hover:text-white transition"
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          onClick={toggleMenu}
        >
          {menuAbierto ? "Cerrar" : "Menú"}
        </button>

        {/* Navegación en desktop: visible desde md en adelante */}
        <ul className="hidden md:flex gap-5">
          {menuItems.map((item) => (
            <MenuItem key={item.texto} texto={item.texto} enlace={item.url} />
          ))}
        </ul>
      </div>

      {/* Navegación en móvil: render condicional según el estado */}
      <div
        id="menu-movil"
        className={`md:hidden px-6 bg-teal-400 shadow-inner text-center font-bold ${
          menuAbierto ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col py-2">
          {menuItems.map((item) => (
            <MenuItem
              key={item.texto}
              texto={item.texto}
              enlace={item.url}
              // Al hacer click en un enlace móvil, cerramos el menú
              onClick={() => setMenuAbierto(false)}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
