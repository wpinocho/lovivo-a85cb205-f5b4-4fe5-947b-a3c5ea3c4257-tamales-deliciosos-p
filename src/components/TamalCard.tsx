import React from 'react';
import { Plus, Flame } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tamal } from '../types';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

interface TamalCardProps {
  tamal: Tamal;
}

export const TamalCard: React.FC<TamalCardProps> = ({ tamal }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    console.log('Adding tamal to cart:', tamal.name);
    addToCart(tamal);
    toast({
      title: "¡Agregado al carrito!",
      description: `${tamal.name} ha sido agregado a tu carrito.`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'dulce': return 'bg-pink-100 text-pink-800';
      case 'salado': return 'bg-green-100 text-green-800';
      case 'especial': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'dulce': return 'Dulce';
      case 'salado': return 'Salado';
      case 'especial': return 'Especial';
      default: return category;
    }
  };

  const getSpicyIndicator = (level: number) => {
    if (level === 0) return null;
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: level }, (_, i) => (
          <Flame key={i} className="h-4 w-4 text-red-500" />
        ))}
      </div>
    );
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center">
        <div className="text-6xl mb-4">{tamal.image}</div>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getCategoryColor(tamal.category)}>
            {getCategoryLabel(tamal.category)}
          </Badge>
          {getSpicyIndicator(tamal.spicyLevel)}
        </div>
        <CardTitle className="text-lg">{tamal.name}</CardTitle>
        <CardDescription className="text-sm">
          {tamal.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-gray-700">Ingredientes:</h4>
          <div className="flex flex-wrap gap-1">
            {tamal.ingredients.map((ingredient, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-4">
        <div className="text-2xl font-bold text-green-600">
          ${tamal.price}
        </div>
        <Button onClick={handleAddToCart} className="bg-red-600 hover:bg-red-700">
          <Plus className="h-4 w-4 mr-2" />
          Agregar
        </Button>
      </CardFooter>
    </Card>
  );
};