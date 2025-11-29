import React from 'react';

// Componente SVG en línea para la flecha de COMPRAR / SHOP NOW
const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Datos simulados para las 3 promociones
const promotionData = [
  {
    title: 'Estación de Carga Inalámbrica',
    subtitle: '15 W Carga rápida',
    description: 'Cargador inalámbrico 3 en 1 para iPhone, Watch y AirPods.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR608g3XUlPnXwBXOx6TUF5VC_8VK7YEhbDUvdaVasXEy81_jxh6XThdicJH2czkvXz9qU&usqp=CAU',
    ctaText: 'COMPRAR',
    theme: 'bg-gradient-to-r from-gray-200 to-blue-200', // Degradado gris/azul claro
  },
  {
    title: 'Micrófonos Inalámbricos',
    subtitle: '2 Micrófonos',
    description: 'Compatible con Android y iOS. Perfecto para streaming.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxYhC4ZY41eWo3aTZhWKqqzgL0hCTMtr3IQ&s',
    ctaText: 'COMPRAR',
    theme: 'bg-gradient-to-r from-red-200 to-purple-200', // Degradado rojo/púrpura
  },
  {
    title: 'Cámara de Seguridad WiFi',
    subtitle: '1080P FULL HD',
    description: 'Detección humana, visión nocturna y llamada de voz.',
    imageUrl: 'https://ae01.alicdn.com/kf/S5942c2112b5b4362acc4e9eb7bfbf70aV.jpg_640x640q90.jpg',
    ctaText: 'SHOP NOW',
    theme: 'bg-gradient-to-r from-blue-100 to-green-100', // Degradado azul/verde claro
  },
];

// Componente individual de la tarjeta de promoción
const PromotionCard = ({ data }) => {
    // La tarjeta combina la imagen (placeholder) con el diseño de fondo y los textos
  return (
    <div className="w-full h-auto min-h-[180px] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] cursor-pointer">
      <div className={`relative flex items-center p-4 lg:p-6 h-full ${data.theme}`}>
        
        {/* Imagen del Producto (ocupando una gran parte) */}
        <div className="absolute inset-0 z-0 opacity-70" style={{ backgroundImage: `url(${data.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        
        {/* Contenido (superpuesto y estilizado) */}
        <div className="relative z-10 w-full flex flex-col items-start justify-center text-gray-800">
          
          {/* Títulos y Descripciones */}
          <h3 className="text-xl sm:text-2xl font-black text-zinc-800 uppercase leading-tight drop-shadow-md">
            {data.title}
          </h3>
          <p className="text-base sm:text-lg font-bold text-red-600 mb-4 drop-shadow-sm">
            {data.subtitle}
          </p>

          {/* Botón CTA con el efecto visual de "cola" */}
          <a href="#" className="flex items-center group relative mt-4">
            {/* Texto CTA */}
            <span className="relative z-20 px-4 py-2 bg-white text-gray-800 font-bold uppercase text-sm rounded-l-lg transition-all duration-300 group-hover:bg-gray-100">
              {data.ctaText}
            </span>
            
            {/* Cola (Efecto del arrow/flecha) */}
            <span className="relative z-20 flex items-center justify-center h-full px-2 py-2 bg-white text-gray-800 transition-all duration-300 group-hover:bg-gray-100 rounded-r-lg">
                <ArrowRightIcon className="w-5 h-5" />
            </span>

            {/* Fucsia de fondo (para simular el diseño de la imagen) */}
            <div className="absolute right-[-10px] w-full h-full bg-sky-600 transform skew-x-[-15deg] z-10 rounded-r-lg"></div>

          </a>
        </div>
        
      </div>
    </div>
  );
};


// Componente principal Publicidad
const Publicidad = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Responsive: Muestra 1 columna en móvil, 3 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotionData.map((promo, index) => (
            <PromotionCard key={index} data={promo} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Publicidad