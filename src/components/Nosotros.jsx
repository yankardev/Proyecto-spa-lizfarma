import { useEffect, useState } from "react";
import misionImg from "../assets/mision.jpg";
import visionImg from "../assets/vision.jpeg";
import lizfarmaImg from "../assets/lizfarma.png";

const coloresTitulo = ["text-teal-500", "text-pink-500", "text-indigo-500", "text-amber-500"]
const mensaje =
  "LizFarma nació con el compromiso de brindar salud y confianza a las familias de Pucusana. Con esfuerzo y dedicación hemos crecido para ofrecer productos de calidad y un servicio cercano a la comunidad.";

const VALORES = [
  {
    id: "mision",
    titulo: "Misión",
    descripcion:
      "Garantizar la salud de nuestros clientes ofreciendo productos farmacéuticos de calidad y un servicio confiable.",
    imagen: misionImg
  },
  {
    id: "vision",
    titulo: "Visión",
    descripcion:
      "Ser reconocidos como la farmacia más confiable de Pucusana, contribuyendo a la salud de nuestra comunidad.",
    imagen: visionImg
  },
]
const servicios = ["Venta de medicamentos", "Delivery", "Presión arterial", "Asesorías" ]; //añadir "Ofertas", "Comunidad"

export default function Nosotros() {
  const [historia, setHistoria] = useState("");
  const [colorIdx, setColorIdx] = useState(0);
  const [visibles, setVisibles] = useState(0);

  // Máquina de escribir
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {i++; setHistoria(mensaje.slice(0, i));
      if (i >= mensaje.length) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, []);

  // cambio de color del título
  useEffect(() => {
    const id = setInterval(() => setColorIdx((i) => (i + 1) % coloresTitulo.length), 2000);
    return () => clearInterval(id);
  }, []);

  // Aparición progresiva de servicios (1 cada 700ms)
  useEffect(() => {
    if (visibles >= servicios.length) return;
    const id = setInterval(() => {setVisibles((v) => {
        const next = v + 1;
        if (next >= servicios.length) clearInterval(id);
        return next;
      });
    }, 700);
    return () => clearInterval(id);
  }, [visibles]);

  return (
    <section className="bg-teal-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className={`text-4xl font-bold text-center mb-10 transition-colors duration-700 ${coloresTitulo[colorIdx]}`}>
          Nosotros
        </h1>

        <div className="flex flex-col items-center mb-12 text-center">
          <img src={lizfarmaImg} alt="Farmacia LizFarma" className="w-40 h-40 object-contain mb-6 hover:scale-130" loading="lazy" />
          <p className="max-w-3xl text-gray-700 text-lg leading-relaxed">
            {historia || "\u00A0"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {VALORES.map((v) => (
            <div key={v.id} className="group relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <img src={v.imagen} alt={v.titulo} loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"/>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-600 text-white p-6
                              opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="text-2xl font-bold">{v.titulo}</h3>
                <p className="mt-2">{v.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Servicios dinámicos (slice según contador) */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-teal-600 text-center md:text-left">
            Servicios que ofrecemos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.slice(0, visibles).map((s) => (
              <div key={s} className="p-4 bg-gray-100 rounded-xl shadow transition hover:bg-teal-500 hover:text-white">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
