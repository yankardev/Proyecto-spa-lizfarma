// src/components/FechaHora.jsx
import { useEffect, useState } from "react";

export default function FechaHora() {
  const [ahora, setAhora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setAhora(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fecha = ahora.toLocaleDateString("es-PE", {day: "2-digit", month: "2-digit", year: "numeric",});
  const horaFormat = ahora.toLocaleTimeString("es-PE", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit",});

  return (
    <div className="w-full bg-teal-700 text-white shadow">
      <div className="w-full flex items-center justify-between py-2 px-4">
          <div className="text-xs sm:text-sm opacity-95">
            Fecha: {fecha}
          </div>
          <div className="text-2xl font-bold sm:text-sm opacity-95">
            {horaFormat}
          </div>
      </div>
    </div>
  );
}
