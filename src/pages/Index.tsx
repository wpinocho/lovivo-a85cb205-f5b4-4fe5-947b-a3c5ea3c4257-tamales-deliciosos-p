import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProductGrid } from '../components/ProductGrid';
import { Footer } from '../components/Footer';

const Index = () => {
  console.log('Index page rendered');
  
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ProductGrid />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;