import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { CartDialog } from './CartDialog';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  console.log('Header rendered, total items:', totalItems);

  return (
    <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Store className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Tamales Doña María</h1>
              <p className="text-red-100 text-sm">Tradición y sabor desde 1985</p>
            </div>
          </div>
          
          <CartDialog>
            <Button variant="outline" className="relative bg-white text-red-600 hover:bg-red-50">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-800 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </CartDialog>
        </div>
      </div>
    </header>
  );
};