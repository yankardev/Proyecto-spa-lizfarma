import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const imagenes = [banner1, banner2, banner3];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((i) => (i + 1) % imagenes.length)}, 2000)
        return () => clearInterval(interval);
    }, [])

return (
  <div className="w-full h-[400px] md:h-[500px] overflow-hidden relative my-2 shadow-lg flex flex-col items-center justify-center bg-teal-400 p-4">
    {/* Texto */}
    <div className="text-center text-white mb-3 z-10 drop-shadow-lg">
      <h2 className="text-3xl md:text-5xl font-bold mb-3">Tu salud, nuestra prioridad</h2>
      <p className="text-sm md:text-lg">Medicina confiable, atención personalizada y servicio a domicilio</p>
    </div>
    {/* Imagen */}
    <div className="absolute inset-0">
      <img
        src={imagenes[index]}
        alt="Banner"
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Oscurece un poco la imagen */}
    </div>

    {/* Botón */}
    <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-2xl shadow-md hover:bg-green-500 transition z-10">
       <NavLink to="/nosotros">Conócenos</NavLink>
    </button>
  </div>
);
}
