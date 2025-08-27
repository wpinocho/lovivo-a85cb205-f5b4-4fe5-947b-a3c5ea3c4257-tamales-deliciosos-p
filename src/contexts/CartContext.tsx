import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartContextType, CartItem, Tamal } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (tamal: Tamal) => {
    console.log('Adding to cart:', tamal.name);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.tamal.id === tamal.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.tamal.id === tamal.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { tamal, quantity: 1 }];
    });
  };

  const removeFromCart = (tamalId: string) => {
    console.log('Removing from cart:', tamalId);
    setItems(prevItems => prevItems.filter(item => item.tamal.id !== tamalId));
  };

  const updateQuantity = (tamalId: string, quantity: number) => {
    console.log('Updating quantity:', tamalId, quantity);
    if (quantity <= 0) {
      removeFromCart(tamalId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.tamal.id === tamalId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.tamal.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};