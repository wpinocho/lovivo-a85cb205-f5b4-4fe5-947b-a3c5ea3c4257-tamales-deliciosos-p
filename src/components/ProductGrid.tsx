import React, { useState } from 'react';
import { TamalCard } from './TamalCard';
import { Button } from './ui/button';
import { tamales } from '../data/tamales';

export const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  console.log('ProductGrid rendered, selected category:', selectedCategory);

  const filteredTamales = selectedCategory === 'todos' 
    ? tamales 
    : tamales.filter(tamal => tamal.category === selectedCategory);

  const categories = [
    { id: 'todos', label: 'Todos', count: tamales.length },
    { id: 'salado', label: 'Salados', count: tamales.filter(t => t.category === 'salado').length },
    { id: 'dulce', label: 'Dulces', count: tamales.filter(t => t.category === 'dulce').length },
    { id: 'especial', label: 'Especiales', count: tamales.filter(t => t.category === 'especial').length },
  ];

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Deliciosos Tamales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada tamal es preparado con ingredientes frescos y recetas tradicionales 
            que han pasado de generación en generación.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id 
                  ? "bg-red-600 hover:bg-red-700" 
                  : "hover:bg-red-50 hover:text-red-600"
              }`}
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTamales.map((tamal) => (
            <TamalCard key={tamal.id} tamal={tamal} />
          ))}
        </div>

        {filteredTamales.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No hay tamales disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};