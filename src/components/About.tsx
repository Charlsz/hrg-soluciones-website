import React, { useEffect, useState, useRef } from 'react';
import { Shield, Users, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    {
      icon: <Shield className="h-8 w-8" />,
      value: '3+',
      label: 'Años Sin Accidentes',
      description: 'La seguridad es nuestra prioridad. Gracias a un riguroso enfoque en la capacitación y la implementación de prácticas seguras, hemos mantenido más de 1,095 días sin accidentes. Este compromiso no solo protege a nuestro equipo, sino que también garantiza la integridad de los proyectos y la satisfacción de nuestros clientes.'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      value: '6+',
      label: 'Dtos en cobertura',
      description: 'Nuestra capacidad de respuesta y atención se extiende a seis departamentos en Colombia: Bolívar, Sucre, Atlántico, Magdalena, Guajira y Antioquia (Norte). Esta cobertura nos permite ofrecer un servicio eficiente y oportuno, asegurando que nuestros clientes en diferentes regiones reciban el apoyo que necesitan, sin importar su ubicación.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: '100',
      label: 'Servicios realizados',
      description: 'Desde nuestra fundación, hemos sobrepasado los 100 servicios en diversas áreas, incluyendo proyectos eléctricos, construcción y mantenimiento. Cada uno de estos servicios refleja nuestra dedicación a ofrecer soluciones de alta calidad y adaptadas a las necesidades específicas de nuestros clientes.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Nuestra historia y compromiso !
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Somos HRG SOLUCIONES S.A.S
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Desde nuestra fundación, hemos logrado impactar positivamente los proyectos de nuestros clientes a través de soluciones efectivas y de alta calidad en diversas áreas de ingeniería.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                HRG Soluciones S.A.S nació como una alternativa de atención personalizada en servicios específicos, ofreciendo apoyo en mantenimientos básicos. Día a día, mejoramos nuestras capacidades, investigamos y aprendemos continuamente. Aprovechamos la experiencia de nuestros colaboradores, quienes cuentan con más de 20 años en los sectores eléctrico, civil y metalmecánico, lo que nos permite ofrecer un paquete integral de soluciones en ingeniería.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Nuestro equipo, más que empleados, forma una familia de personas confiables, honestas y comprometidas. Actualmente, disponemos de equipos certificados que garantizan mediciones precisas, y brindamos atención de emergencias 24/7 con un tiempo de respuesta máximo de 120 minutos.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                Nuestra meta es que usted pueda enfocarse en su verdadero objetivo, confiando en que su inmueble está en buenas manos.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Equipo de trabajo HRG Soluciones"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg will-change-transform"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                    <span className="text-white">{stat.icon}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 font-poppins tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-gray-800 mb-4">{stat.label}</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;