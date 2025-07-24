import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://web.whatsapp.com/send?phone=573185276273&text=Hola%20HRG%2C%20estoy%20revisando%20tu%20web%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20para%20solicitar%20una%20cotizaci%C3%B3n.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 group focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block">
        <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap">
          ¡Contáctanos por WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 pointer-events-none"></div>
    </button>
  );
};

export default WhatsAppFloat;