import React, { useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

// Coordinates for the restaurant (VSU Coordinates)
const center = {
  lat: 37.24, // E
  lng: -77.42,
};

// Keep libraries array as a constant outside the component
const libraries: 'marker'[] = ['marker'];

// Custom Marker component using AdvancedMarkerElement
const AdvancedMarker: React.FC<{
  map: google.maps.Map | null;
  position: google.maps.LatLngLiteral;
}> = ({ map, position }) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  useEffect(() => {
    if (!map) return;

    // Create the AdvancedMarkerElement
    markerRef.current = new google.maps.marker.AdvancedMarkerElement({
      position,
      map,
      title: 'Restaurant Location',
    });

    // Cleanup function
    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
      }
    };
  }, [map, position]);

  return null;
};

const MapContent: React.FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  return (
    <div role="region" aria-label="Restaurant Location Map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
      >
        {mapRef.current && (
          <AdvancedMarker map={mapRef.current} position={center} />
        )}
      </GoogleMap>
    </div>
  );
};

const RestaurantMap: React.FC = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY_DEV;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries,
  });

  if (!apiKey) {
    console.error('Google Maps API key is not set!');
    return (
      <div className="text-white">Map cannot be loaded - API key missing</div>
    );
  }

  if (loadError) {
    return <div className="text-white">Error loading maps</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-2">
      <h2 className="text-2xl font-bold mb-4 text-white">Find Us</h2>
      {isLoaded ? (
        <MapContent />
      ) : (
        <div className="h-[400px] flex items-center justify-center bg-gray-800 rounded-lg">
          <div className="text-white">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMap;
