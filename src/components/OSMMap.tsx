import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Coordenadas exactas para Calle 31 #60-100, L 202, Cartagena, Bolívar, Colombia
const position: [number, number] = [10.4037, -75.5144];

const OSMMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        className="rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-gray-800 mb-2">HRG Soluciones S.A.S.</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Calle 31 #60-100, L 202</strong><br />
                Cartagena, Bolívar<br />
                Colombia
              </p>
              <div className="text-xs text-gray-500">
                <p>📞 +57 318 527 6273</p>
                <p>📞 +57 300 652 3357</p>
                <p>📧 administracion@hrgsoluciones.com</p>
                <p>📧 hrgcartagena@gmail.com</p>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OSMMap;