import React, { useState, useEffect, useCallback } from 'react';

const ChevronLeftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// Diapositivas del carrusel
const slides = [
  {
    id: 1,
    title: 'CINE EN CASA',
    subtitle: 'PROYECTOR HY300',
    description: '4K | Stereo Sound | WiFi 6 | Android OS',
    imageUrl: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/7e4f8d60-8cbc-4b37-b8e7-6635c5c04fdf.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
    cta: { text: 'Ver Oferta', href: '#oferta1', color: 'bg-fuchsia-600' },
  },
  {
    id: 2,
    title: 'LAPTOPS POTENTES',
    subtitle: 'Para Gamers y Creadores',
    description: 'Descuentos de hasta el 40% en modelos seleccionados.',
    imageUrl: 'https://www.amd.com/content/dam/amd/en/images/backgrounds/products/3292900-gaming-laptops-banner.jpg',
    cta: { text: 'Comprar Ahora', href: '#oferta2', color: 'bg-red-600' },
  },
  {
    id: 3,
    title: 'ACCESORIOS SMART',
    subtitle: 'Relojes, audífonos y más',
    description: 'La tecnología que te acompaña en el día a día.',
    imageUrl: 'https://www.peru-smart.com/wp-content/uploads/2023/09/banner-principal-web.webp',
    cta: { text: 'Explorar', href: '#oferta3', color: 'bg-red-600' },
  },
];

const Carrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Función para ir a la diapositiva anterior
  const goToPrevious = () => {
    setCurrentSlide((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a la siguiente diapositiva (usada también por el autoplay)
  const goToNext = useCallback(() => {
    setCurrentSlide((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // Función para ir a una diapositiva específica (para los puntos/indicadores)
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay, para que el carrusel avance automaticamente
  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000); // Cambia de diapositiva cada 5 segundos
    return () => clearInterval(slideInterval); // Limpia el intervalo al desmontar
  }, [goToNext]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 shadow-xl max-w-7xl mx-auto">
      {/* Contenedor de las Diapositivas: Usa 'flex' y transforma para el movimiento */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="w-full flex-shrink-0 relative bg-cover bg-center h-[250px] sm:h-[350px] lg:h-[400px]"
            // Usamos el placeholder como imagen de fondo
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            {/* Capa de Oscurecimiento o Gradiente (para mejor contraste del texto) */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Contenido del Slide */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center text-white">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-2 uppercase drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl sm:text-3xl lg:text-4xl font-light mb-4 drop-shadow-md text-fuchsia-300">
                {slide.subtitle}
              </p>
              <p className="text-sm sm:text-base lg:text-xl font-medium mb-6 drop-shadow-sm">
                {slide.description}
              </p>
              <a 
                href={slide.cta.href} 
                className={`w-fit px-8 py-3 rounded-full text-white font-bold text-lg uppercase transition duration-300 hover:scale-[1.03] shadow-lg ${slide.cta.color}`}
              >
                {slide.cta.text}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de Navegación Izquierdo (Anterior) */}
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition duration-300 z-10 focus:outline-none"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeftIcon className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Botón de Navegación Derecho (Siguiente) */}
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition duration-300 z-10 focus:outline-none"
        aria-label="Diapositiva siguiente"
      >
        <ChevronRightIcon className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Indicadores de Posición (Puntos) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              currentSlide === index 
                ? 'bg-white scale-110 shadow-lg' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel