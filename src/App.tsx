import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import About from './components/About';
import Clients from './components/Clients';
import Services from './components/Services';
import CorporatePresentation from './components/CorporatePresentation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');


  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <HomeContent />
            <Clients />
          </>
        );
      case 'acerca-de':
        return <About />;
      case 'servicios':
        return <Services />;
      case 'contacto':
        return (
          <>
            <Contact />
            <CorporatePresentation />
          </>
        );
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;