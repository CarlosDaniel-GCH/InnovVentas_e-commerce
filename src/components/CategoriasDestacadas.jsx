import React from 'react';

// --- Datos Simulados ---
const featuredCategories = {
  mainBanner: {
    title: 'Zona Gaming',
    imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2022/06/banner-gaming.jpg',
    ctaLink: '#zona-gaming',
    style: 'bg-gradient-to-r from-red-600 to-fuchsia-600 text-white',
  },
  miniBanners: [
    {
      title: 'TV y Streaming',
      imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2023/03/Tv-box-diseno-web.png',
      ctaLink: '#tv-streaming',
    },
    {
      title: 'Mandos y Accesorios PS4/PS5',
      imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2023/09/4-2.jpg',
      ctaLink: '#mandos-ps',
    },
    {
      title: 'Realidad Virtual',
      imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2023/09/5-2.jpg',
      ctaLink: '#realidad-virtual',
    },
    {
      title: 'Atención al Cliente',
      imageUrl: 'https://todatecnologia.pe/wp-content/uploads/2023/09/6-4.jpg',
      ctaLink: '#soporte',
      isService: true,
    },
  ],
};

// --- Componentes ---

// Componente para la Tarjeta de Mini Categoría (Mini Banner)
const MiniBannerCard = ({ data }) => {
  // En el caso del banner de servicio (el último de la imagen), se añade texto adicional
  const isServiceCard = data.isService;

  return (
    <a 
      href={data.ctaLink} 
      className="block rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.03] cursor-pointer relative group"
    >
      {/* Imagen de Fondo (Placeholder) */}
      <img
        src={data.imageUrl}
        alt={data.title}
        className="w-full h-full object-cover absolute inset-0 transition duration-500 group-hover:opacity-80"
      />
      
      {/* Contenido (Para la tarjeta de Servicio/Chat) */}
      {isServiceCard && (
        <div className="relative p-6 h-full flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-20 text-white min-h-[150px]"></div>
      )}
      
      {/* Capa de superposición para que el título sea más legible en las tarjetas normales */}
      {!isServiceCard && (
        <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-500 group-hover:bg-opacity-20 flex items-end justify-start p-4"></div>
      )}
    </a>
  );
};

const MainBanner = ({ data }) => {
  return (
    <a 
      href={data.ctaLink}
      className={`relative h-32 sm:h-48 rounded-lg overflow-hidden shadow-2xl mb-8 flex items-center justify-center transition duration-300 hover:scale-[1.01]`}
    >
      {/* Imagen de Fondo Izquierda */}
      <div className="absolute left-0 h-full w-1/3 bg-cover bg-center z-10" 
           style={{ backgroundImage: `url(https://placehold.co/400x300/333333/FFFFFF?text=Setup+Gaming)` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Imagen de Fondo Derecha */}
      <div className="absolute right-0 h-full w-1/3 bg-cover bg-center z-10" 
           style={{ backgroundImage: `url(https://placehold.co/400x300/333333/FFFFFF?text=Chica+Gaming)` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Contenedor del Título con la Forma Geométrica (Fucsia/Rojo) */}
      <div className={`absolute inset-0 flex items-center justify-center ${data.style} z-20`}>
        
        {/* Usamos el skew para simular las puntas y el clip-path o un enfoque visual */}
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Este div simula la forma curva/puntiaguda en el centro */}
            <div className="w-full h-full transform skew-x-[-15deg] md:skew-x-[-10deg] bg-gradient-to-r from-red-600 to-fuchsia-600 shadow-inner">
                {/* Revertimos el skew para que el texto sea legible */}
                <div className="transform skew-x-[15deg] md:skew-x-[10deg] h-full flex items-center justify-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg px-8">
                        {data.title}
                    </h2>
                </div>
            </div>
        </div>
      </div>
      
    </a>
  );
};

// Componente Principal CategoriasDestacadas
const CategoriasDestacadas = () => {
  return (
    <section className="py-8 lg:py-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Categorías Destacadas
        </h2>
        
        {/* Banner Principal */}
        <MainBanner data={featuredCategories.mainBanner} />
        
        {/* Mini Banners de Categorías */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6">
          {featuredCategories.miniBanners.map((banner, index) => (
            <MiniBannerCard key={index} data={banner} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CategoriasDestacadas;