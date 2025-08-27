import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            🫔 Los Mejores Tamales de México 🫔
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100">
            Hechos con amor y tradición familiar. Masa suave, rellenos generosos y el auténtico sabor de México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-yellow-50 text-lg px-8 py-4"
              onClick={scrollToProducts}
            >
              Ver Nuestros Tamales
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4"
            >
              Conoce Nuestra Historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};