import React from 'react';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Ubicación
            </h3>
            <p className="text-gray-300 mb-2">
              Calle Revolución #123<br />
              Centro, Ciudad de México<br />
              CP 06000
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Horarios
            </h3>
            <div className="text-gray-300 space-y-1">
              <p>Lunes - Viernes: 7:00 AM - 8:00 PM</p>
              <p>Sábados: 8:00 AM - 9:00 PM</p>
              <p>Domingos: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Contacto
            </h3>
            <div className="text-gray-300 space-y-2">
              <p>📞 (55) 1234-5678</p>
              <p>📱 WhatsApp: (55) 9876-5432</p>
              <p>✉️ pedidos@tamalesdmaria.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-500" /> por Tamales Doña María © 2024
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Tradición familiar desde 1985 • Los mejores tamales de México
          </p>
        </div>
      </div>
    </footer>
  );
};