import React from 'react';
import { Zap, HardHat, Wrench, CheckCircle, Award, Users, Clock } from 'lucide-react';

const HomeContent: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573185276273?text=Hola%20HRG%2C%20estoy%20revisando%20tu%20web%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20para%20solicitar%20una%20cotizaci%C3%B3n.', '_blank');
  };

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'ELECTRICIDAD',
      description: 'Nuestra experiencia en el diseño, instalación y mantenimiento de sistemas eléctricos garantiza la seguridad y eficiencia en sus operaciones. Utilizamos tecnología de vanguardia y personal capacitado para asegurar que cada proyecto se ejecute conforme a los más altos estándares de calidad.'
    },
    {
      icon: <HardHat className="h-8 w-8" />,
      title: 'CONSTRUCCIÓN',
      description: 'En el ámbito constructivo, abordamos proyectos de infraestructura con un enfoque integral, desde la planificación hasta la ejecución. Nuestro equipo trabaja de la mano del cliente para transformar sus ideas en realidades tangibles, asegurando que cada detalle sea atendido con precisión y profesionalismo.'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'MANTENIMIENTOS',
      description: 'Para garantizar la continuidad de tus operaciones, ofrecemos servicios de mantenimiento preventivo y correctivo. Esto no solo minimiza el riesgo de fallos, sino que también optimiza el rendimiento de tus instalaciones, permitiéndote centrarte en lo que realmente importa: el crecimiento de tu negocio.'
    }
  ];

  const valuePropositions = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Experiencia',
      description: 'Contamos con un equipo capacitado y con años de experiencia en diversas áreas clave. Nuestro personal está certificado en múltiples disciplinas, nos aseguramos de que nuestros colaboradores reciban la formación adecuada para operar en estos entornos, minimizando riesgos, protegiendo todos los involucrados, lo que garantiza la calidad y seguridad en nuestros proyectos.',
      subtitle: 'En resumen, la combinación de experiencia y la capacitación continua de nuestro equipo nos permite ofrecer soluciones integrales y confiables, adaptadas a las necesidades de nuestros clientes.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Compromiso con Plazos y Estándares de Calidad',
      description: 'Nos comprometemos a cumplir con los plazos y estándares de calidad requeridos por nuestros clientes, implementando procesos de gestión rigurosos para asegurar el éxito de cada proyecto.',
      guarantees: [
        'Pago de Seguridad Social',
        'Cumplimiento de Impuestos',
        'Pago de Nómina',
        'Calidad de Mano de Obra y Materiales'
      ]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Soluciones Integrales',
      description: 'Ofrecemos servicios integrales que abarcan todas las necesidades de cada proyecto, garantizando resultados óptimos en cada etapa del proceso. Nuestra filosofía se centra en proporcionar un enfoque completo que incluye:',
      processes: [
        'Evaluación Inicial',
        'Planificación y Diseño',
        'Ejecución y Supervisión',
        'Mantenimiento y Soporte',
        'Capacitación y Asesoría'
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      {/* Main Services Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Electricidad, Construcción & Mantenimientos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 ease-out will-change-transform">
              <div className="bg-yellow-500 p-4 rounded-xl w-fit mb-6">
                <span className="text-white">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            En HRG SOLUCIONES S.A.S., nuestro compromiso es brindar soluciones que se ajusten a tus necesidades, 
            facilitando tu camino hacia el éxito. Juntos, podemos construir un futuro más eficiente.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95 will-change-transform"
            aria-label="Contactar por WhatsApp"
          >
            Contáctanos Ya
          </button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Nuestra Propuesta de Valor
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Calidad y Profesionalismo en Cada Proyecto
            </h3>
          </div>

          <div className="space-y-12">
            {valuePropositions.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-300 ease-out hover:shadow-xl will-change-transform">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 p-4 rounded-xl flex-shrink-0">
                    <span className="text-white">{item.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-poppins">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.subtitle && (
                      <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                        {item.subtitle}
                      </p>
                    )}

                    {item.guarantees && (
                      <div className="mb-6">
                        <p className="text-gray-800 font-medium mb-4">
                          Contamos con pólizas que garantizan el uso adecuado de los fondos, abarcando:
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {item.guarantees.map((guarantee, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                              <span className="text-gray-700">{guarantee}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.processes && (
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.processes.map((process, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                            <span className="text-gray-700">{process}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              En HRG SOLUCIONES S.A.S. nos aseguramos de que cada proyecto cumpla y supere las expectativas, 
              entregando soluciones que aportan valor y sostenibilidad a largo plazo. Nuestro compromiso es 
              ofrecer un servicio completo que permita a nuestros clientes concentrarse en su negocio, 
              mientras nosotros gestionamos todos los aspectos técnicos y operativos de su infraestructura.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;