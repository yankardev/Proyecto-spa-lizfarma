import React from "react";

// centralizas los datos aquí para mantener
// el JSX limpio. si cambian  los datos se edita el objeto/array y listo.

const MAPS_QUERY = "LizFarma, Pucusana, Lima - Perú";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

// este array se recorre con .map() para generar 3 Cards
const CONTACTO = [
  { titulo: "Dirección", texto: "A. Lima - Cerro Colorado Mz. K L-1 L-2 - Pucusana" },
  { titulo: "Teléfono",  texto: "(01) 232-5678" },
  { titulo: "Email",     texto: "contacto@lizfarma.pe" }, // { titulo: "whatsapp",     texto: "94959832154" },
  
];

const HORARIOS = [
  { dia: "Lunes - Viernes", rango: "8:00 AM - 10:00 PM" },
  { dia: "Sábados",         rango: "8:00 AM - 8:00 PM" },
  { dia: "Domingos",        rango: "9:00 AM - 6:00 PM" },
];

// Aplica el mismo estilo (borde redondo + sombra + padding) en donde lo uses.
function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-50 rounded-2xl shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}

export default function Ubicacion() {
  return (
    <div className="min-h-[70vh] " >
      <header className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Nuestra Ubicación</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <Card className="md:col-span-2 flex items-center justify-center h-72 sm:h-80">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir mapa en Google Maps"
              className="w-full h-full grid place-items-center rounded-xl bg-teal-50 hover:bg-teal-100 transition"
            >
              <div className="text-teal-700 text-center">
                <div className="font-semibold">Mapa interactivo</div>
                <div className="text-sm opacity-70">Haz clic para abrir en Google Maps</div>
                <span className="inline-block mt-4 rounded-full bg-teal-600 text-white px-4 py-2">
                  Cómo llegar
                </span>
              </div>
            </a>
          </Card>

          {/* Cards de contacto generadas con .map() */}
          {/* Si mañana agregas "Whatsapp", solo añades un objeto en CONTACTO. */}
          <div className="space-y-4">
            {CONTACTO.map(({ titulo, texto }) => (
              <Card key={titulo}>
                <h3 className="font-semibold text-teal-800">{titulo}</h3>
                <p className="mt-1 text-sm opacity-80">{texto}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Horarios de Atención</h2>
          <Card>
            <HoursTable rows={HORARIOS} />
          </Card>
        </section>
      </main>
    </div>
  );
}

//Tabla Reutilizable 
function HoursTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-teal-700">
            <th className="py-2 px-3">Horarios</th>
            <th className="py-2 px-3">Rango</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.dia} className="border-t">
              <td className="py-2 px-3">{r.dia}</td>
              <td className="py-2 px-3">{r.rango}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
