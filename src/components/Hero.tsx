import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigateToServices = () => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage('servicios');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573185276273?text=Hola%20HRG%2C%20estoy%20revisando%20tu%20web%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20para%20solicitar%20una%20cotizaci%C3%B3n.', '_blank');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/foto-2011-1024x848.webp)'
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins">
            Electricidad, Construcción 
            <span className="text-yellow-500 block mt-2">
              & Mantenimientos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Soluciones integrales en servicios eléctricos, construcción civil y mantenimiento industrial. 
            Compromiso con la excelencia y la seguridad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95 will-change-transform"
              aria-label="Contactar por WhatsApp"
            >
              Contáctanos Ya
            </button>
            
            <button
              onClick={navigateToServices}
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95 will-change-transform"
              aria-label="Ver servicios disponibles"
            >
              Ver Servicios
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;