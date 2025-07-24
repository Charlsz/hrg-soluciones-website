import React from 'react';

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
            Clientes que han depositado su confianza en nuestra experiencia en servicio
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
            <img 
              src="/clientes-5-1024x150.webp"
              alt="Clientes que confían en HRG Soluciones"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;