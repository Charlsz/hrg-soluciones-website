import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'acerca-de', label: 'Acerca de' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/whiteb_hrglogo.jpg" 
                alt="HRG Soluciones Logo" 
                className="h-25 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soluciones integrales en servicios eléctricos, construcción civil y mantenimiento industrial. 
              Comprometidos con la excelencia y la seguridad en cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61565849021895"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/hrgcartagena/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Navegación Rápida</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className={`transition-colors hover:text-yellow-500 ${
                      currentPage === link.id ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Calle 31 #60-100, L 202<br />
                    Cartagena, Bolívar<br />
                    Colombia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 mt-1" />
                <div>
                  <a href="tel:+573185276273" className="text-gray-300 hover:text-yellow-500 block">
                    +57 318 527 6273
                  </a>
                  <a href="tel:+573006523357" className="text-gray-300 hover:text-yellow-500 block">
                    +57 300 652 3357
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 mt-1" />
                <div>
                  <a href="mailto:administracion@hrgsoluciones.com" className="text-gray-300 hover:text-yellow-500 block">
                    administracion@hrgsoluciones.com
                  </a>
                  <a href="mailto:hrgcartagena@gmail.com" className="text-gray-300 hover:text-yellow-500 block">
                    hrgcartagena@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} HRG Soluciones S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;