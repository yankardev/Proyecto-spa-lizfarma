import { useState } from "react";
import { ventanaproductos as DATA } from "../data/ventanaproductos";
import "../styles/productos.css";


function stringOrEmpty(val) { return (typeof val === "string") ? val : ""; }
function numberOrZero(val) { return (typeof val === "number" && !Number.isNaN(val)) ? val : 0; }
function srcOrPlaceholder(val) {
  return (typeof val === "string" && val.length > 0)
    ? val
    : "https://via.placeholder.com/400x300?text=Producto";
}

function ProductoTarjeta({ p }) {
  const stock = numberOrZero(p.stock);
  const disponible = stock > 0;

  const src = srcOrPlaceholder(p.imagen);
  const precio = numberOrZero(p.precio);
  const nombre = stringOrEmpty(p.nombre);
  const categoria = stringOrEmpty(p.categoria);

  const badgeClass = disponible ? "prodBadge prodBadgeOk" : "prodBadge prodBadgeBad";

  return (
    <article className="producto">
      <div className="productoImagen">
        <img src={src} alt={nombre} className="imagenProducto" loading="lazy" />
      </div>
      <div className="cuerpoProducto">
        <h3 className="tituloProducto">{nombre}</h3>
        <p className="parrafoProducto">{categoria}</p>
        <div className="precioFila">
          <span className="precioProducto">S/. {precio.toFixed(2)}</span>
          <span className={badgeClass}>
            {disponible ? "Stock: " + stock : "Sin stock"}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Productos() {
  const [q, setQ] = useState("");
  const qLower = q.toLowerCase();

  const lista = DATA.filter((p) => {
    const nombre = stringOrEmpty(p.nombre).toLowerCase();
    const categoria = stringOrEmpty(p.categoria).toLowerCase();

    return nombre.includes(qLower) || categoria.includes(qLower);
  });

  return (
    <section className="productosPagina">
      <div className="productosHero">
        <div className="productosHeroInner">
          <h1 className="productosTitulo">Productos</h1>
          <p className="productosSubtitulo">Catálogo de Productos LIZFARMA</p>
        </div>
      </div>

      <div className="productosConteiner">
        <div className="productosFiltros">
          <div className="campoFiltro">
            <label htmlFor="buscador" className="etiquetaFiltro">Buscar</label>
            <input
              id="buscador"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Busca tu producto"
              className="inputBuscar"
            />
          </div>
        </div>
      </div>

      <div className="cuadriculaProductos">
        {lista.map((p, idx) => {
          const key = (typeof p.id === "string" && p.id.length > 0) ? p.id : ("prod-" + idx);
          return <ProductoTarjeta key={key} p={p} />
        })}
      </div>

      {lista.length === 0 && (
        <div className="productosVacio">No se encontraron productos.</div>
      )}
    </section>
  );
}
