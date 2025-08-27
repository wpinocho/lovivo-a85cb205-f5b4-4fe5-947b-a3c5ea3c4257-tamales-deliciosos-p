export interface Tamal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'dulce' | 'salado' | 'especial';
  ingredients: string[];
  spicyLevel: number; // 0-3 (0 = no picante, 3 = muy picante)
}

export interface CartItem {
  tamal: Tamal;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (tamal: Tamal) => void;
  removeFromCart: (tamalId: string) => void;
  updateQuantity: (tamalId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}