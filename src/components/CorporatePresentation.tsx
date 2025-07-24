import React from 'react';
import { FileText, Download, MessageCircle } from 'lucide-react';

const CorporatePresentation: React.FC = () => {
  const handleWhatsAppRequest = () => {
    window.open(
      'https://wa.me/573185276273?text=Hola%20HRG%2C%20me%20gustar%C3%ADa%20solicitar%20la%20presentaci%C3%B3n%20corporativa%20de%20sus%20servicios.%20Gracias.',
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Presentación Corporativa
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Conoce en detalle nuestros servicios, capacidades técnicas, proyectos realizados 
              y certificaciones. Una presentación completa de nuestra propuesta de valor.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <button
                onClick={handleWhatsAppRequest}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95"
                aria-label="Solicitar presentación corporativa por WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Solicitar Presentación</span>
              </button>
              
              <p className="text-gray-300 mt-4 text-sm">
                Te enviaremos la presentación completa en formato PDF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporatePresentation;