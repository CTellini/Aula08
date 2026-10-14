import React from 'react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <Container>
        <div className="text-center">
          <img
            src="/TBN_Systems.png"
            alt="Tellcon Systems"
            className="mx-auto mb-4 h-20 w-20 rounded-2xl object-cover shadow-sm"
          />
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

export default Footer;
