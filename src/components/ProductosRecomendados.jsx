import React from 'react';

// Productos recomendados
const recommendedProducts = [
  {
    id: 1,
    name: 'Cámara Seguridad Vigilancia PTZ WiFi Doble Lente Visión Nocturna Infrarroja Sirena Full HD Baihuo MY-7150',
    originalPrice: 179.90,
    salePrice: 149.90,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2024/08/Camara-Seguridad-PTZ-WIFI-Doble-Lente-Vision-Noctuna-Infrarroja-Sirena-Full-HD-Baihuo-MY-7150-2-450x450.png',
    isSale: true,
  },
  {
    id: 2,
    name: 'Cámara Seguridad IP con Panel Solar 4K de 8 MP con doble lente, WiFi, inalámbrica, para exteriores LANTUN VCS10-3K',
    originalPrice: 250.00,
    salePrice: 199.90,
    imageUrl: 'data:image/jpeg;base64,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',
    isSale: true,
  },
  {
    id: 3,
    name: 'Cámara de Seguridad con Panel Solar WiFi, FHD 1080P Visión Nocturna por Infrarrojos Lantun ABC-D1',
    originalPrice: 200.00,
    salePrice: 169.90,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2024/07/Camara-de-Seguridad-con-Panel-Solar-WiFi-FHD-1080P-Vision-Nocturna-por-Infrarrojos-Lantun-ABC-Q1-450x450.png',
    isSale: true,
  },
  {
    id: 4,
    name: 'Cámara de Seguridad de 3 Lentes PTZ WiFi IP66 Sirena Visión Nocturna Detección Movimiento LANTUN B4 W',
    originalPrice: 249.00,
    salePrice: 189.90,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2024/07/CAMARA-DE-SEGURIDAD-PTZ-3-LENTES-LANTUN-849-2-W-NEGRO-3-450x450.png',
    isSale: true,
  },
  {
    id: 5,
    name: 'Cámara de Seguridad de 3 Lentes PTZ WiFi IP66 Sirena Visión Nocturna Detección Movimiento LANTUN B4 (Modelo Simil)',
    originalPrice: 199.90,
    salePrice: 159.90,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2024/07/Camara-de-Seguridad-de-3-Lentes-PTZ-Wifi-IP66-Impermeable-Vision-Nocturna-Deteccion-de-Movimiento-LANTUN-849-2-W-450x450.png',
    isSale: true,
  },
];

// Componente individual para la tarjeta de producto
const ProductCard = ({ product }) => {
  return (
    <div className="group border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
      
      {/* Contenedor de Imagen y Etiqueta SALE */}
      <div className="relative p-2 h-48 sm:h-56 flex items-center justify-center bg-gray-50 border-b border-gray-100">
        
        {/* Etiqueta SALE (Arriba a la izquierda) */}
        {product.isSale && (
          <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-sm shadow-md z-10">
            SALE
          </span>
        )}
        
        {/* Imagen del Producto */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.05]"
        />
        
        {/* Botón de Agregar al Carrito (Oculto, aparece al pasar el mouse) */}
        <button 
          className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white font-bold py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
          title="Añadir al carrito"
        >
          AÑADIR AL CARRITO
        </button>
      </div>

      {/* Contenido del Producto (Texto y Precios) */}
      <div className="p-4 flex flex-col justify-between h-36">
        
        {/* Nombre del Producto */}
        <a href={`#product-${product.id}`} className="text-gray-800 text-sm font-medium hover:text-fuchsia-600 transition duration-150 line-clamp-3 mb-2" title={product.name}>
          {product.name}
        </a>

        {/* Precios */}
        <div className="flex flex-col mt-auto">
          {product.isSale && (
            <span className="text-gray-500 text-xs line-through">
              S/. {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-bold text-red-600">
            S/. {product.salePrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const ProductosRecomendados = () => {
  return (
    <section className="py-8 lg:py-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">
          Productos Recomendados
        </h2>
        
        {/* Grid Responsive de Productos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProductosRecomendados;