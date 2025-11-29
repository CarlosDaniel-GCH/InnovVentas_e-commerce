import React, { useState } from 'react';
import Logo from '../../public/InnovVentasLogo.png'

const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.71-3.69l-1.63-1.63a1 1 0 0 1-.22-1.09l1.47-3.66a2 2 0 0 1 1.05-1.05l3.66-1.47a1 1 0 0 1 1.09.22l1.63 1.63a2 2 0 0 1 0 2.82l-1.39 1.39a1 1 0 0 0 .21 1.25 15.93 15.93 0 0 0 4.67 4.67 1 1 0 0 0 1.25.21l1.39-1.39a2 2 0 0 1 2.82 0z"></path>
  </svg>
);

const UserIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ShoppingBagIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const RepeatIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="17 1 21 5 17 9"></polyline>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
    <polyline points="7 23 3 19 7 15"></polyline>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
  </svg>
);


const Header = () => {
  // Estado para manejar la visibilidad del menú de categorías en móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos simulados para los enlaces de navegación
  const navigationLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Tienda', href: '#tienda' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contáctenos', href: '#contacto' },
  ];

  const contacts = [
    { icon: PhoneIcon, label: '+51 918 092 933' },
    { icon: PhoneIcon, label: '+51 931 015 166' },
  ];

  return (
    <header className="w-full font-sans">
      {/* ========================================
        Franja Superior (Roja Fuerte)
        ========================================
      */}
      <div className="bg-blue-900 p-4 lg:py-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="w-14 h-14 text-white fill-current"/>
            <h1 className="text-xl font-bold tracking-tight">InnovVentas Perú</h1>
          </div>
          
          {/* Barra de Búsqueda (Visible en todos los tamaños) */}
          <div className="w-full max-w-xl flex order-3 lg:order-2">
            <div className="flex w-full rounded-lg overflow-hidden shadow-lg">
              {/* Selector de Categorías */}
              <select className="hidden sm:block p-3 text-gray-800 bg-white border-r border-gray-200 focus:outline-none transition duration-150 ease-in-out cursor-pointer">
                <option>Todas las categorías</option>
                <option>Laptops</option>
                <option>Smartphones</option>
                <option>Componentes</option>
                <option>Accesorios</option>
              </select>
              
              {/* Input de Búsqueda */}
              <input 
                type="text" 
                placeholder="Buscar productos" 
                className="flex-grow p-3 text-gray-800 focus:outline-none placeholder-gray-400"
              />
              
              {/* Botón de Búsqueda */}
              <button className="bg-white text-gray-600 px-4 flex items-center justify-center hover:bg-gray-100 transition duration-150 ease-in-out">
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contactos e Info (Visible en escritorio/tablet) */}
          <div className="hidden lg:flex items-center space-x-6 order-3 text-sm">
            {/* Tienda */}
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition duration-150">
              <MapPinIcon className="w-5 h-5" />
              <span className="font-semibold mt-1">TIENDA LIMA</span>
              <span className="text-xs">Ver Mapa</span>
            </div>
            
            {/* Ventas */}
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition duration-150">
              <PhoneIcon className="w-5 h-5 -rotate-90" />
              <span className="font-semibold mt-1">VENTAS</span>
              {contacts.map((contact, index) => (
                <span key={index} className="text-xs">{contact.label}</span>
              ))}
            </div>
            
            {/* Ayuda */}
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition duration-150">
              <PhoneIcon className="w-5 h-5" />
              <span className="font-semibold mt-1">NECESITAS AYUDA</span>
              <span className="text-xs">(+51) 931 015 166</span>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================
        Franja Inferior (Magenta/Fucsia) - Navegación Principal
        ========================================
      */}
      <div className="bg-sky-600 lg:bg-sky-600/90 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 lg:px-8">
          
          {/* Botón de Categorías (Visible en todos los tamaños) */}
          <div className="flex items-center text-white cursor-pointer hover:bg-sky-700 p-2 rounded-lg transition duration-150" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="w-5 h-5" />
            <span className="font-bold text-sm hidden lg:block">CATEGORÍAS</span>
          </div>

          {/* Menú de Navegación Principal (Oculto en móvil, visible en escritorio) */}
          <nav className="hidden lg:flex flex-grow justify-start ml-8 space-x-6">
            {navigationLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="flex items-center text-white font-medium text-sm hover:text-gray-200 transition duration-150 group"
              >
                {item.name}
                {/* Indicador de submenú (asumiendo que algunos tienen dropdown) */}
                <ChevronDownIcon className="w-3 h-3 ml-1 opacity-70 group-hover:opacity-100 transition duration-150" />
              </a>
            ))}
          </nav>

          {/* Iconos de Usuario/Carrito (Lado Derecho) */}
          <div className="flex items-center space-x-5 text-white">
            
            {/* Visto Recientemente */}
            <a href="#recently-viewed" className="hidden sm:flex items-center text-sm font-medium hover:text-gray-200 transition duration-150">
                <RepeatIcon className="w-4 h-4 mr-1" />
                VISTO RECIENTEMENTE
            </a>

            {/* Icono de Usuario */}
            <UserIcon className="w-5 h-5 cursor-pointer hover:text-gray-200 transition duration-150" />
            
            {/* Icono de Favoritos/Lista de deseos */}
            <div className="relative cursor-pointer hover:text-gray-200 transition duration-150">
              <HeartIcon className="w-5 h-5" />
              <span className="absolute -top-2 -right-3 text-xs font-bold bg-white text-sky-600 rounded-full h-4 w-4 flex items-center justify-center border-2 border-sky-700">
                0
              </span>
            </div>
            
            {/* Icono de Carrito */}
            <div className="relative cursor-pointer hover:text-gray-200 transition duration-150">
              <ShoppingBagIcon className="w-5 h-5" />
              <span className="absolute -top-2 -right-3 text-xs font-bold bg-white text-sky-600 rounded-full h-4 w-4 flex items-center justify-center border-2 border-sky-700">
                0
              </span>
            </div>

          </div>
        </div>

        {/* Menú de Categorías Móvil (Dropdown) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-sky-700 p-4 border-t border-sky-800">
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((item) => (
                <a 
                  key={`mobile-${item.name}`} 
                  href={item.href} 
                  className="text-white font-medium text-sm hover:text-gray-200 block p-2 rounded-md transition duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;