import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-200' : 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100'
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center" aria-label="Tellcon Systems">
            <img
              src="/TBN_Systems.png"
              alt="Tellcon Systems"
              className="h-12 w-12 rounded-xl object-cover shadow-sm"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#about" className="text-primary-900 hover:text-secondary-600 font-medium transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-primary-900 hover:text-secondary-600 font-medium transition-colors">
            Serviços
          </a>
          <a href="#methodology" className="text-primary-900 hover:text-secondary-600 font-medium transition-colors">
            Metodologia
          </a>
          <Button 
            variant="primary" 
            className="ml-4"
            onClick={() => window.location.href = '#apply'}
          >
            Contate Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary-900"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-200 animate-fade-in">
          <div className="py-5 px-6 flex flex-col space-y-6">
            <a 
              href="#about" 
              className="text-primary-900 hover:text-secondary-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#services" 
              className="text-primary-900 hover:text-secondary-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#methodology" 
              className="text-primary-900 hover:text-secondary-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Metodologia
            </a>
            <Button 
              variant="primary" 
              className="w-full text-center py-3"
              onClick={() => {
                window.location.href = '#apply';
                setIsMenuOpen(false);
              }}
            >
              Contate Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
