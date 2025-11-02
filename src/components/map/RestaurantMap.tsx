import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
};

// Coordinates for the restaurant (VSU Coordinates)
const center = {
  lat: 37.24,  // E
  lng: -77.42
};

const RestaurantMap: React.FC = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error('Google Maps API key is not set!');
    return <div className="text-white">Map cannot be loaded - API key missing</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-2">
      <h2 className="text-2xl font-bold mb-4 text-white">Find Us</h2>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default RestaurantMap;