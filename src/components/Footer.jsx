import { useState } from "react";
import facebookImg from "../assets/face.png";
import instagramImg from "../assets/insta.jpg";
import whatsappImg from "../assets/wasap.png";

export default function Footer() {
  // Estado para saber cuál red está activa (hover)
  const [redActiva, setRedActiva] = useState(null);
  const redesSociales = [
    {id: "facebook", imagen: facebookImg, enlace: "https://facebook.com/lizfarma", alt: "Facebook",},
    {id: "instagram", imagen: instagramImg, enlace: "https://instagram.com/lizfarma", alt: "Instagram",},
    {id: "whatsapp", imagen: whatsappImg,enlace: "https://wa.me/#", alt: "WhatsApp",}
  ]
  return (
    <footer className="bg-teal-700 text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold">LIZFARMA</p>
          <p>A. Lima - Cerro Colorado Mz. K L-1 L-2 - Pucusana</p>
          <p>(01) 232-5678</p>
          <p>contacto@lizfarma.pe</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          {redesSociales.map((red) => (
            <a key={red.id} href={red.enlace} target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setRedActiva(red.id)}
              onMouseLeave={() => setRedActiva(null)}
              className="transition-transform duration-300">
              <img src={red.imagen} alt={red.alt}
                className={`w-10 h-10 ${redActiva === red.id ? "scale-125" : "scale-100"} transition-transform duration-300 hover:rounded-3xl`} />
            </a>
          ))}
        </div>
        <p className="text-center md:text-right">
          &copy; 2025 LIZFARMA - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
