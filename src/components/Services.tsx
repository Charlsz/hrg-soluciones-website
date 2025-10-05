import React, { useState, useEffect } from 'react';
import { Zap, HardHat, Lightbulb, Sun, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('electrical');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Gallery images from gallerywork folder
  const galleryImages = [
    'WhatsApp Image 2025-10-05 at 17.08.29.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.30 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.30.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.31 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.31 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.31 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.31.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.32 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.32 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.32 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.32 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.32.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.33 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.33 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.33 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.33 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.33.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.34 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.34 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.34 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.34 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.34 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.34.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.35 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.35 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.35 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.35 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.35 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.35 (6).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.35.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.36 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.36 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.36 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.36 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.36 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.36.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.37 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.37 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.37 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.37 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.37 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.37.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.38 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.38 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.38 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.38 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.38 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.38 (6).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.38.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.39 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.39 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.39 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.39 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.39 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.39.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.40 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.40 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.40 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.40 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.40 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.40.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.41 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.41 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.41 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.41 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.41 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.41.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.42 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.42 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.42 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.42 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.42 (5).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.42 (6).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.42.jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.43 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.43 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.43 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.43 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.08.43.jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.42.jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.42 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.43.jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.43 (1).jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.43 (2).jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.43 (3).jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.43 (4).jpeg',
    'WhatsApp Image 2025-10-05 at 17.23.43 (5).jpeg',
  ];

  // Gallery functions
  const openImageModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeImageModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

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

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Gallery Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
                Galería de imágenes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Conoce algunos de nuestros proyectos ejecutados y la calidad de nuestro trabajo
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  onClick={() => openImageModal(image, index)}
                >
                  <img
                    src={`/gallerywork/${image}`}
                    alt={`Proyecto HRG ${index + 1}`}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">Ver imagen</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Cerrar imagen"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={`/gallerywork/${selectedImage}`}
              alt={`Proyecto HRG ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full">
              <span className="text-sm font-medium">
                {currentImageIndex + 1} de {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;