import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para atender tus proyectos. Contáctanos para una cotización personalizada
          </p>
          
          <div className="mt-8">
            <button
              onClick={() => window.open('https://web.whatsapp.com/send?phone=573185276273&text=Hola%20HRG%2C%20estoy%20revisando%20tu%20web%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20personalizada.', '_blank')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95"
              aria-label="Solicitar cotización por WhatsApp"
            >
              Solicita tu cotización con nosotros!
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Ubicación</p>
                  <p className="text-gray-600">Calle 31 #60-100, L 202<br />Cartagena, Bolívar, Colombia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Teléfonos</p>
                  <a href="tel:+573185276273" className="text-yellow-600 hover:text-yellow-700 block">
                    +57 318 527 6273
                  </a>
                  <a href="tel:+573006523357" className="text-yellow-600 hover:text-yellow-700 block">
                    +57 300 652 3357
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Correos</p>
                  <a href="mailto:administracion@hrgsoluciones.com" className="text-yellow-600 hover:text-yellow-700 block">
                    administracion@hrgsoluciones.com
                  </a>
                  <a href="mailto:hrgcartagena@gmail.com" className="text-yellow-600 hover:text-yellow-700 block">
                    hrgcartagena@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;