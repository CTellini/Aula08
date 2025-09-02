import React from 'react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <Container>
        <div className="text-center">
          <div className="text-2xl font-display font-bold mb-4">
            <GradientText>Tellcon</GradientText>
            <span className="ml-1 text-gray-900">Systems</span>
          </div>
          <p className="text-gray-600 max-w-sm mx-auto">
            Transformando negócios com IA e automação humanizada e gerando resultados reais.
          </p>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-10">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Tellcon Systems. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default Footer;
