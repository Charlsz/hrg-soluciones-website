import React, { useState, useEffect } from 'react';
import { Zap, HardHat, Lightbulb, Sun, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('electrical');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = {
    electrical: {
      title: 'Servicio Eléctrico',
      subtitle: '(Ingeniería Eléctrica) Mantenimiento, Diseño, Construcción y Montaje',
      icon: <Zap className="h-8 w-8" />,
      description: 'Soluciones integrales en instalaciones eléctricas con los más altos estándares de seguridad y calidad técnica.',
      images: [
        '6c9f3725-9cf5-4189-af5e-73ae912c7d65 copy.webp',
        'FOTO-7-461x1024 (1).webp',
        'a639c6f1-6a5e-42a6-a3ae-866332561876.webp'
      ],
      items: [
        'Instalaciones y obras eléctricas de Media y Baja Tensión',
        'Subestaciones Eléctricas',
        'Sistemas de Puesta a Tierra y Apantallamiento',
        'Instalaciones Internas Eléctricas',
        'Mantenimiento de Generadores Eléctricos y todo el grupo electrógeno en general',
        'Mantenimiento de Electrobombas y Motobombas',
        'Termografía',
        'Instalación de Circuito Cerrado de Televisión'
      ]
    },
    construction: {
      title: 'Construcción, Demolición, Restauración y Remodelación',
      subtitle: '(Ingeniería Civil)',
      icon: <HardHat className="h-8 w-8" />,
      description: 'Proyectos de construcción civil con supervisión técnica especializada y acabados de alta calidad.',
      images: [
        'FOTO-175-766x1024.webp',
        'FOTO-21-1024x461.webp',
        'FOTO-30-766x1024.webp',
        'FOTO-187.webp'
      ],
      items: [
        'Construcción, reparación, remodelación y rediseño de inmuebles, casas, oficinas y bodegas',
        'Servicios de pintura, cielorrasos, Drywall, PVC, adecuaciones generales, pisos e impermeabilización',
        'Instalación y mantenimiento de radio bases de telecomunicaciones',
        'Cimentaciones, limpieza y arreglo del área de trabajo',
        'Servicios de cerramiento',
        'Diseño integral de oficinas y bodegas, incluyendo renovaciones y reparaciones',
        'Elaboración de planos arquitectónicos y estructurales para proyectos de construcción',
        'Diseño y planificación de infraestructura'
      ]
    },
    lighting: {
      title: 'Iluminación',
      subtitle: 'Diseño y Eficiencia Energética',
      icon: <Lightbulb className="h-8 w-8" />,
      description: 'Soluciones avanzadas de iluminación con tecnología LED y sistemas de control inteligente.',
      images: [
        'lumi-1.webp',
        'lumi-3.webp'
      ],
      items: [
        'Estudio de iluminación: Análisis detallado de necesidades y condiciones existentes',
        'Diseño y recomendaciones: Desarrollo de diseños personalizados y recomendaciones de productos',
        'Servicios de diseño, cálculo y visualización: Utilizamos programas certificados para diseño preciso',
        'Eficiencia energética y sostenibilidad: Implementación de tecnologías LED y sistemas de control e Integración de energías renovables',
        'Normativas y estándares: Cumplimiento con normativas y certificaciones',
        'Mantenimiento y soporte: Programas de mantenimiento y servicios de reparación',
        'Especialización en distintos sectores: Soluciones adaptadas a diferentes sectores'
      ]
    },
    solar: {
      title: 'Energía Solar',
      subtitle: 'Sistemas Fotovoltaicos y Energías Renovables',
      icon: <Sun className="h-8 w-8" />,
      description: 'Implementación de sistemas de energía solar fotovoltaica para eficiencia energética y sostenibilidad.',
      images: [
        '3-1024x768 copy.webp',
        'panel-1024x732.webp',
        'lumi-1.webp',
        'lumi-3.webp',
        'FOTO-175-766x1024.webp',
        'FOTO-187.webp'
      ],
      items: [
        'Suministro, instalación y puesta en marcha de sistemas fotovoltaicos a la medida a partir de energía solar',
        'Equipos híbridos, Integración de sistemas solares para la inyección de corriente a la red',
        'Mantenimiento preventivo y correctivo de sistemas solares',
        'Monitoreo y gestión de sistemas fotovoltaicos',
        'Diseño y consultoría para proyectos solares personalizados'
      ]
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="py-32 bg-gray-900 text-white relative overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/{F653D00F-FD9E-4FEF-A2EC-4DE61C303E0F}.png)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mb-8">
              <Zap className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins text-white drop-shadow-lg">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light text-gray-200 max-w-3xl mx-auto">
              Soluciones integrales con los más altos estándares de calidad y seguridad
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://wa.me/573185276273?text=Hola%20HRG%2C%20estoy%20revisando%20sus%20servicios%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n.', '_blank')}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95"
                aria-label="Solicitar cotización por WhatsApp"
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-gray-50 services-content">
        <div className="container mx-auto px-6">
          {/* All Services Displayed Vertically */}
          <div className="max-w-6xl mx-auto space-y-16">
            {Object.entries(services).map(([key, service], serviceIndex) => (
              <div key={key} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Two-column layout with alternating order */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Conditional rendering for alternating layout */}
                  {(key === 'electrical' || key === 'construction') ? (
                    <>
                      {/* Images first */}
                      <div className="p-8 md:p-12 bg-gray-50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.images.map((image, index) => (
                            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                              <img 
                                src={`/${image}`}
                                alt={`${service.title} - Imagen ${index + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Text content second */}
                      <div className="p-8 md:p-12">
                        <div className="flex items-center mb-6">
                          <div className="bg-yellow-500 p-3 rounded-xl mr-4">
                            <span className="text-white">
                              {service.icon}
                            </span>
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">
                              {service.title}
                            </h2>
                            <p className="text-yellow-600 text-sm md:text-base mt-1">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-base mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                          ¿Qué incluye este servicio?
                        </h3>
                        
                        <div className="space-y-3">
                          {service.items.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text content first */}
                      <div className="p-8 md:p-12">
                        <div className="flex items-center mb-6">
                          <div className="bg-yellow-500 p-3 rounded-xl mr-4">
                            <span className="text-white">
                              {service.icon}
                            </span>
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">
                              {service.title}
                            </h2>
                            <p className="text-yellow-600 text-sm md:text-base mt-1">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-base mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                          ¿Qué incluye este servicio?
                        </h3>
                        
                        <div className="space-y-3">
                          {service.items.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Images second */}
                      <div className="p-8 md:p-12 bg-gray-50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.images.map((image, index) => (
                            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                              <img 
                                src={`/${image}`}
                                alt={`${service.title} - Imagen ${index + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Call to Action - Full width at bottom */}
                <div className="p-8 md:p-12">
                  <div className="bg-yellow-500 rounded-2xl p-8 text-gray-900 text-center">
                    <h4 className="text-2xl font-bold mb-4">¿Necesitas este servicio?</h4>
                    <p className="text-lg mb-6">
                      Contáctanos para una cotización personalizada y sin compromiso
                    </p>
                    <button
                      onClick={() => window.open('https://wa.me/573185276273?text=Hola%20HRG%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20' + encodeURIComponent(service.title.toLowerCase()) + '%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n.', '_blank')}
                      className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300 active:scale-95"
                      aria-label={`Solicitar cotización para ${service.title}`}
                    >
                      Solicitar Cotización
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;