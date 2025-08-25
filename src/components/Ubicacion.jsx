import React from "react";

/* ========= Datos ========= */
const info = {
  nombre: "LIZFARMA",
  direccionLinea: "Av. Lima - Cerro Colorado Mz. K-1 Lt. 2",
  distrito: "Pucusana, Lima - Perú",
  telefono: "(01) 234-5678",
  telefonoHref: "tel:+5112345678",
  email: "contacto@lizfarma.pe",
};

const HORARIOS = [
  { dia: "Lunes - Viernes", rango: "8:00 AM - 10:00 PM" },
  { dia: "Sábados", rango: "8:00 AM - 8:00 PM" },
  { dia: "Domingos", rango: "9:00 AM - 6:00 PM" },
];
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}

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

/* ========= Página ========= */
export default function Ubicacion() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${info.direccionLinea}, ${info.distrito}`
  )}`;
  const abrirMaps = () => window.open(mapsUrl, "_blank", "noopener,noreferrer");

  return (
    <div className="min-h-[70vh]">
      {/* HERO alineado */}
      <header className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Nuestra Ubicación
          </h1>
          <p className="opacity-90 break-words">
            {info.direccionLinea} — {info.distrito}
          </p>
        </div>
      </header>

      {/* CONTENIDO con mismo ancho que el header (sin -mt) */}
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Mapa + Contacto (1 col en móvil, 2/1 en desktop) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Mapa ocupa 2 columnas en desktop */}
          <Card className="md:col-span-2 flex items-center justify-center h-72 sm:h-80">
            <button
              onClick={abrirMaps}
              className="w-full h-full grid place-items-center rounded-xl bg-teal-50 hover:bg-teal-100 transition outline-none"
              aria-label="Abrir mapa en Google Maps"
            >
              <div className="text-teal-700 text-center">
                <div className="text-5xl mb-2">📍</div>
                <div className="font-semibold">Mapa interactivo</div>
                <div className="text-sm opacity-70">
                  Haz clic para abrir en Google Maps
                </div>
                <span className="inline-block mt-4 rounded-full bg-teal-600 text-white px-4 py-2">
                  Cómo llegar
                </span>
              </div>
            </button>
          </Card>

          {/* Tarjetas de contacto */}
          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold text-teal-700">Dirección</h3>
              <p className="mt-1">{info.nombre}</p>
              <p className="text-sm opacity-80">{info.direccionLinea}</p>
              <p className="text-sm opacity-80">{info.distrito}</p>
            </Card>

            <Card>
              <h3 className="font-semibold text-teal-700">Teléfono</h3>
              <a
                href={info.telefonoHref}
                className="mt-1 inline-block text-teal-700 underline"
              >
                {info.telefono}
              </a>
              <p className="text-xs opacity-70">
                Atención al cliente y emergencias
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-teal-700">Email</h3>
              <a
                href={`mailto:${info.email}`}
                className="mt-1 inline-block text-teal-700 underline"
              >
                {info.email}
              </a>
              <p className="text-xs opacity-70">Consultas y pedidos online</p>
            </Card>
          </div>
        </section>

        {/* Horarios */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Horarios de Atención
          </h2>
          <Card>
            <HoursTable rows={HORARIOS} />
          </Card>
        </section>
      </main>
    </div>
  );
}
