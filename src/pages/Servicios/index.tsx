import { servicios } from './data';

function Servicios() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl font-extrabold text-center text-gray-900">Nuestros Servicios</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Ofrecemos soluciones personalizadas para todas tus necesidades tecnológicas.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            {/* Imagen */}
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className="w-full h-48 object-cover"
            />
            {/* Información */}
            <div className="p-6">
              <div className="flex items-center justify-center text-3xl mb-4 text-blue-500">
                <span>{servicio.icono}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{servicio.titulo}</h2>
              <p className="mt-3 text-gray-600">{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Servicios;
