import { useState, useEffect } from "react";
import misionImg from "../assets/mision.jpg";
import visionImg from "../assets/vision.jpeg";
import lizfarmaImg from "../assets/lizfarma.png";

export default function Nosotros() {
  // Estados
  const [tarjetaActiva, setTarjetaActiva] = useState(null); 
  const [colorTitulo, setColorTitulo] = useState("text-teal-500"); 
  const [serviciosVisibles, setServiciosVisibles] = useState([]); 
  const [textoHistoria, setTextoHistoria] = useState(""); 

  //  Historia de la farmacia
  const mensajeHistoria =
    " LizFarma nació con el compromiso de brindar salud y confianza a las familias de Pucusana. Con esfuerzo y dedicación hemos crecido para ofrecer productos de calidad y un servicio cercano a la comunidad.";

  //Efecto máquina de escribir para la historia
  useEffect(() => {
    let indice = 0;
    const intervaloEscritura = setInterval(() => {
      if (indice < mensajeHistoria.length) {
        setTextoHistoria((prev) => prev + mensajeHistoria[indice]);
        indice++;
      } else {
        clearInterval(intervaloEscritura);
      }
    }, 50);

    return () => clearInterval(intervaloEscritura);
  }, []);

  // Cambio de color dinámico para el título
  useEffect(() => {
    const colores = ["text-teal-500", "text-pink-500", "text-indigo-500", "text-amber-500"];
    let indice = 0;

    const intervaloColores = setInterval(() => {
      indice = (indice + 1) % colores.length;
      setColorTitulo(colores[indice]);
    }, 2000);

    return () => clearInterval(intervaloColores);
  }, []);

  // Servicios que aparecen progresivamente
  useEffect(() => {
    const listaServicios = ["Venta de medicamentos", "Delivery", "Presión arterial", "Asesorías"];
    listaServicios.forEach((servicio, i) => {
      setTimeout(() => {
        setServiciosVisibles((prev) => [...prev, servicio]);
      }, i * 700);
    });
  }, []);

  // Información de misión y visión
  const valoresEmpresa = [
    {
      id: "mision",
      titulo: "Misión",
      descripcion:
        "Garantizar la salud de nuestros clientes ofreciendo productos farmacéuticos de calidad y un servicio confiable.",
      imagen: misionImg,
    },
    {
      id: "vision",
      titulo: "Visión",
      descripcion:
        "Ser reconocidos como la farmacia más confiable de Pucusana, contribuyendo a la salud de nuestra comunidad.",
      imagen: visionImg,
    },
  ];

  return (
    <section className="bg-white text-center py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título dinámico */}
        <h1 className={`text-4xl font-bold mb-10 transition-colors duration-700 ${colorTitulo}`}>
          Nosotros
        </h1>

        {/* Imagen + Historia */}
        <div className="flex flex-col items-center mb-12">
          <img src={lizfarmaImg} alt="Farmacia LizFarma"
            className="w-32 h-32 object-contain mb-6 animate-pulse"
          />
          <p className="max-w-3xl text-gray-700 text-lg leading-relaxed">
            {textoHistoria}
            <span className="animate-blink">|</span>
          </p>
        </div>

        {/* 🔹 Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {valoresEmpresa.map((valor) => (
            <div key={valor.id}
              className="relative w-full h-80 cursor-pointer rounded-2xl overflow-hidden shadow-lg"
              onMouseEnter={() => setTarjetaActiva(valor.id)}
              onMouseLeave={() => setTarjetaActiva(null)}
            >
              {/* Imagen */}
              <img src={valor.imagen} alt={valor.titulo}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  tarjetaActiva === valor.id ? "opacity-0" : "opacity-100"
                }`}/>

              {/* Texto superpuesto */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center bg-teal-600 text-white p-6 transition-opacity duration-500 ${
                  tarjetaActiva === valor.id ? "opacity-100" : "opacity-0"
                }`}>
                <h3 className="text-2xl font-bold">{valor.titulo}</h3>
                <p className="mt-2">{valor.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Servicios dinámicos */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-teal-600">Servicios que ofrecemos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviciosVisibles.map((servicio, i) => (
              <div key={i}
                className="p-4 bg-gray-100 rounded-xl shadow hover:bg-teal-500 hover:text-white transition duration-500 cursor-pointer">
                {servicio}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
