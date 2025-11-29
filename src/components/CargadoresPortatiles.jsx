import React from 'react';

const LightningBoltIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.5 19h1v-4.43l3.52-4.04-1.09-.94-2.93 3.34v-7.97h-1v7.97l-2.93-3.34-1.09.94 3.52 4.04v4.43z"/>
  </svg>
);

// Productos
const portableChargers = [
  {
    id: 1,
    name: 'Cargador Tipo C UGREEN Uno 65W GAN Nexode USB C Pantalla LED con 3 Puertos 2C1A, Carga Rápida MacBook iPhone',
    originalPrice: 130.90,
    salePrice: 109.90,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2025/09/Cargador-Tipo-C-UGREEN-Uno-65W-GAN-Nexode-USB-C-Pantalla-LED-con-3-Puertos-2C-1A-UGREEN-CD316-VERDE-2-450x450.png',
    tags: ['SALE'],
  },
  {
    id: 2,
    name: 'Power Bank UGREEN 10000mAh Certificado QI2 15W Magsafe UGREEN PB764 PURPURA',
    originalPrice: 230.90,
    salePrice: 199.00,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2025/09/Power-Bank-UGREEN-10000mAh-Certificado-Qi2-15W-Magsafe-UGREEN-PB764-21-450x450.png',
    tags: ['SALE', 'NUEVO'],
  },
  {
    id: 3,
    name: 'Power Bank UGREEN 10000mAh Certificado QI2 15W Magsafe UGREEN PB764',
    originalPrice: 230.00,
    salePrice: 199.00,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2025/09/Power-Bank-UGREEN-10000mAh-Certificado-Qi2-15W-Magsafe-UGREEN-PB764-2-450x450.png',
    tags: ['SOLD OUT', 'NUEVO'],
  },
  {
    id: 4,
    name: 'Ugreen Cargador GaN 100W USB-C con Pantalla TFT Magnético X688 - 45514 Carga Rápida para MacBook Pro/Air, iPad Pro, iPhone 15 Pro, Galaxy S25 Ultra, Mi 8',
    originalPrice: 250.00,
    salePrice: 199.90,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2025/06/Cargador-USB-C-GAN-Nexode-con-4-Puertos-3C1A-Tipo-C-Carga-Rapida-100w-para-MacBook-UGREEN-X688-1-450x450.png',
    tags: ['SALE'],
  },
  {
    id: 5,
    name: 'Power Bank Hoco 20000 mAh Carga Rápida 20W, 22.5W HOCO J104A',
    originalPrice: 100.00,
    salePrice: 79.90,
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2025/02/Power-Bank-Hoco-20000-mAh-Carga-Rapida-20W-22.5W-HOCO-J104A-2-450x450.jpg',
    tags: ['SALE'],
  },
];

// Componente individual para la tarjeta de producto
const ProductCard = ({ product }) => {
  const isSoldOut = product.tags.includes('SOLD OUT');

  // Determinar el color y el contenido de las etiquetas
  const getTagStyle = (tag) => {
    switch (tag) {
      case 'SALE':
        return 'bg-green-600 text-white';
      case 'SOLD OUT':
        return 'bg-gray-600 text-white';
      case 'NUEVO':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className={`group border border-gray-100 rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 bg-white ${isSoldOut ? 'opacity-70' : 'hover:shadow-lg'}`}>
      
      {/* Contenedor de Imagen y Etiquetas */}
      <div className="relative p-2 h-48 sm:h-56 flex items-center justify-center bg-gray-50 border-b border-gray-100">
        
        {/* Etiquetas (Arriba a la izquierda y derecha) */}
        <div className="absolute top-4 left-4 flex flex-col space-y-1 z-10">
          {product.tags.filter(tag => tag !== 'NUEVO').map((tag) => (
            <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-sm shadow-md ${getTagStyle(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
        {product.tags.includes('NUEVO') && (
            <div className="absolute top-4 right-4 z-10">
              <span className={`text-xs font-bold px-3 py-1 rounded-sm shadow-md ${getTagStyle('NUEVO')}`}>
                <LightningBoltIcon className="w-4 h-4 inline-block mr-1 align-text-bottom" />
                NUEVO
              </span>
            </div>
        )}

        
        {/* Imagen del Producto */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.05]"
        />
        
        {/* Botón de Agregar al Carrito */}
        {!isSoldOut && (
            <button 
                className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white font-bold py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                title="Añadir al carrito"
            >
                AÑADIR AL CARRITO
            </button>
        )}
        {isSoldOut && (
             <span className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white font-bold py-2 text-center text-sm">
                AGOTADO
            </span>
        )}
      </div>

      {/* Contenido del Producto (Texto y Precios) */}
      <div className="p-4 flex flex-col justify-between h-36">
        
        {/* Nombre del Producto */}
        <a href={`#product-${product.id}`} className="text-gray-800 text-sm font-medium hover:text-fuchsia-600 transition duration-150 line-clamp-3 mb-2" title={product.name}>
          {product.name}
        </a>

        {/* Precios */}
        <div className="flex flex-col mt-auto">
          <span className="text-gray-500 text-xs line-through">
            S/. {product.originalPrice.toFixed(2)}
          </span>
          <span className="text-lg font-bold text-red-600">
            S/. {product.salePrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

// Componente principal de la sección
const CargadoresPortatiles = () => {
  return (
    <section className="py-8 lg:py-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">
          Cargadores Portátiles
        </h2>
        
        {/* Grid Responsive de Productos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {portableChargers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CargadoresPortatiles;