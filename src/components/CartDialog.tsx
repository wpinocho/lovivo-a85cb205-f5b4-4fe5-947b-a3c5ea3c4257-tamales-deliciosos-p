import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

interface CartDialogProps {
  children: React.ReactNode;
}

export const CartDialog: React.FC<CartDialogProps> = ({ children }) => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();

  console.log('CartDialog rendered, items:', items.length);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega algunos tamales antes de proceder al pago.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Pedido enviado!",
      description: `Tu pedido por $${getTotalPrice()} ha sido enviado. Te contactaremos pronto.`,
    });
    clearCart();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Tu Carrito de Tamales</span>
          </DialogTitle>
          <DialogDescription>
            Revisa tu pedido antes de proceder al pago
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🫔</div>
              <p className="text-lg text-gray-500 mb-4">Tu carrito está vacío</p>
              <p className="text-sm text-gray-400">
                ¡Agrega algunos deliciosos tamales para comenzar!
              </p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.tamal.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="text-3xl">{item.tamal.image}</div>
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.tamal.name}</h3>
                    <p className="text-sm text-gray-600">${item.tamal.price} c/u</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.tamal.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.tamal.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold">${item.tamal.price * item.quantity}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.tamal.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${getTotalPrice()}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="flex-1"
                  >
                    Vaciar Carrito
                  </Button>
                  <Button
                    onClick={handleCheckout}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Proceder al Pago
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};