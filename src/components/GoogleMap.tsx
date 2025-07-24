import React, { useCallback, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px'
};

// Coordenadas aproximadas para Calle 31 #60-100, Cartagena, Bolívar, Colombia
const center = {
  lat: 10.4037,
  lng: -75.5144
};

const GoogleMapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    setShowInfoWindow(!showInfoWindow);
  };

  // Nota: En producción, deberías usar una variable de entorno para la API key
  // Por ahora, mostraremos un placeholder que el usuario debe reemplazar
  const apiKey = "TU_GOOGLE_MAPS_API_KEY_AQUI";

  if (apiKey === "TU_GOOGLE_MAPS_API_KEY_AQUI") {
    return (
      <div className="bg-gray-100 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Mapa de Ubicación</h3>
        <p className="text-gray-600 mb-4">
          Para mostrar el mapa interactivo, necesitas configurar una clave de API de Google Maps.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
          <h4 className="font-semibold text-yellow-800 mb-2">Pasos para configurar Google Maps:</h4>
          <ol className="text-sm text-yellow-700 space-y-1">
            <li>1. Ve a <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="underline">Google Cloud Console</a></li>
            <li>2. Crea un proyecto o selecciona uno existente</li>
            <li>3. Habilita la API de Maps JavaScript</li>
            <li>4. Crea una clave de API</li>
            <li>5. Reemplaza "TU_GOOGLE_MAPS_API_KEY_AQUI" en el código con tu clave real</li>
          </ol>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Nuestra ubicación:</strong><br />
            Calle 31 #60-100, L 202<br />
            Cartagena, Bolívar, Colombia
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker
            position={center}
            onClick={handleMarkerClick}
            title="HRG Soluciones S.A.S."
          />
          
          {showInfoWindow && (
            <InfoWindow
              position={center}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              <div className="p-2">
                <h3 className="font-bold text-gray-800 mb-2">HRG Soluciones S.A.S.</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Calle 31 #60-100, L 202<br />
                  Cartagena, Bolívar<br />
                  Colombia
                </p>
                <div className="text-xs text-gray-500">
                  <p>📞 +57 318 527 6273</p>
                  <p>📧 administracion@hrgsoluciones.com</p>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;