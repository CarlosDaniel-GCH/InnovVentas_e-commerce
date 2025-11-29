import React, { useState, useEffect } from 'react';

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-7.07-7.07A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M15 15l4-4" />
  </svg>
);

const ArrowUpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
  </svg>
);

// Íconos de redes sociales
const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2.81 7.21a3.02 3.02 0 0 1 3.21-3.21h12a3.02 3.02 0 0 1 3.21 3.21v9.58a3.02 3.02 0 0 1-3.21 3.21H6.02a3.02 3.02 0 0 1-3.21-3.21zM10 16.5l6-4.5-6-4.5z" />
  </svg>
);

// --- Función de Icono Social genérica ---
const SocialIcon = ({ Icon, url, color }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white transition-transform hover:scale-110 shadow-md`}
  >
    <Icon className={`w-5 h-5 ${color}`} />
  </a>
);

// --- Componente de Botón "Ir Arriba" ---
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Muestra el botón cuando el desplazamiento supera un umbral
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Desplaza la página al inicio
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 left-1/2 bg-sky-500 hover:bg-sky-400 p-3 rounded-full text-white shadow-lg transition-opacity duration-300 z-50 ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Ir Arriba"
            title="Ir Arriba"
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

// --- Componente principal del Footer ---
const Footer = () => {
  // Lista de elementos para las columnas de información y políticas
  const infoLinks = [
    { title: 'Inicio', url: '#' },
    { title: 'Nosotros', url: '#' },
    { title: 'Tienda', url: '#' },
    { title: 'Blog', url: '#' },
    { title: 'Contáctenos', url: '#' },
  ];

  const policyLinks = [
    { title: 'Política de privacidad general', url: '#' },
    { title: 'Políticas de cambios y devoluciones todatecnologia.pe', url: '#' },
    { title: 'Terminos y condiciones', url: '#' },
    { title: 'Política de cookies', url: '#' },
    { title: 'Libro de Reclamaciones.', url: '#' },
  ];

  return (
    <>
      <footer className="w-full font-sans">        
        {/* Contenedor Principal Rojo Brillante */}
        <div className="bg-blue-900 text-white pt-10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Columna 1: Datos de Contacto */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Datos de Contacto.</h3>
                <div className="space-y-3 text-sm">
                  {/* Atención al Cliente */}
                  <div className="flex items-start">
                    <PhoneIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-white" />
                    <div>
                      <span className="font-semibold block">Atencion al Cliente:</span>
                      <a href="tel:+51931013166" className="hover:underline">+51 931 013 166</a>
                    </div>
                  </div>
                  {/* Ventas */}
                  <div className="flex items-start">
                    <PhoneIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-white" />
                    <div>
                      <span className="font-semibold block">Ventas:</span>
                      <a href="tel:+51900560650" className="hover:underline">+51 900 560 650</a> / 
                      <a href="tel:+51901550672" className="hover:underline"> +51 901 550 672</a>
                    </div>
                  </div>
                  {/* Correo */}
                  <div className="flex items-start">
                    <MailIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-white" />
                    <a href="mailto:ventastodatecnologiaperu@gmail.com" className="hover:underline">ventastodatecnologiaperu@gmail.com</a>
                  </div>
                  {/* Dirección */}
                  <div className="flex items-start pt-2">
                    <MapPinIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-white" />
                    <div>
                      <span className="font-semibold block">Jr. Cusco 440 Int. 204 Cercado de Lima</span>
                      <span className="text-xs block opacity-80">Referencia: A Media Cuadra de Hiraoka de Av. Abancay</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna 2: Políticas */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Políticas</h3>
                <ul className="space-y-2 text-sm">
                  {policyLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="hover:underline transition duration-150">{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna 3: Informaciones */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">Informaciones</h3>
                <ul className="space-y-2 text-sm">
                  {infoLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="hover:underline transition duration-150">{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna 4: Suscríbete al Newsletter */}
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase">¡Suscríbete a nuestro Newsletter!</h3>
                <p className="text-sm mb-4">
                  *Suscribase a nuestro boletín para recibir ofertas de descuentos anticipados, actualizaciones e información de nuevos productos con un 30% de descuento de membresía.
                </p>
                
                {/* Campo de Suscripción (simulado) */}
                <div className="flex mb-6">
                    <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        className="p-3 rounded-l-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        aria-label="Correo electrónico para suscripción"
                    />
                    <button
                        className="bg-fuchsia-600 p-3 rounded-r-md hover:bg-fuchsia-700 transition duration-150"
                        title="Suscribirse"
                        aria-label="Suscribirse al boletín"
                    >
                        <SendIcon className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Enlaces de Redes Sociales */}
                <div className="flex space-x-3">
                  <SocialIcon Icon={FacebookIcon} url="#" color="text-blue-600" />
                  <SocialIcon Icon={InstagramIcon} url="#" color="text-pink-600" />
                  <SocialIcon Icon={YoutubeIcon} url="#" color="text-red-600" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Sección Inferior de Derechos de Autor y Pagos */}
        <div className="bg-blue-900 border-t-2 border-gray-300 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
            
            {/* Derechos de Autor */}
            <p className="mb-3 md:mb-0 text-center md:text-left opacity-80">
              © Toda Tecnología - Todos los derechos reservados
            </p>
            
            {/* Logos de Pago (simulados con placehold.co) */}
            <div className="flex space-x-2">
                <img
                    src="https://placehold.co/180x25/ffffff/000000?text=VISA+MASTERCARD+AMEX+DINERS"
                    alt="Métodos de Pago: Visa, Mastercard, American Express, Diners Club, etc."
                    className="h-6 rounded-sm"
                />
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
};

export default Footer;