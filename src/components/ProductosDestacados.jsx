import { productosDestacados } from "../data/productosDestacados";

export default function ProductosDestacados() {
  return (
<section className="p-5 text-black bg-teal-400">
  <h2 className="text-4xl font-bold text-center mb-8 text-white" >Nuestros Productos</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {productosDestacados.map((producto) => (
      <div key={producto.id} 
        className="bg-gray-100 shadow-lg rounded-xl p-4 flex flex-col items-center transition hover:shadow-xl hover:scale-110 duration-500">
        <div className="w-full h-full bg-teal-500 overflow-hidden flex items-center justify-center rounded-2xl">
          <img src={producto.imagen} alt={producto.nombre} 
            className="w-40 h-full transition-transform duration-500 hover:scale-110 p-4 rounded-3xl"/>
        </div>
        <h3 className="text-lg font-semibold mt-3">{producto.nombre}</h3>
        <p className="text-teal-600 font-bold">S/ {producto.precio.toFixed(2)}</p>
        <button className="mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-green-700 hover:cursor-pointer transition">
          Comprar
        </button>
      </div>
    ))}
  </div>
</section>
  )}
