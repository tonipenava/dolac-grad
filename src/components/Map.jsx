import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CustomMarkerIcon from '../assets/marker.png'; // Replace this with the path to your PNG file

const ComponentResize = () => {
  const map = useMap();

  setTimeout(() => {
    map.invalidateSize();
  }, 0);

  return null;
};

const Map = () => {
  const position = [43.475742676518784, 17.32407758869367];

  // Create custom icon
  const customIcon = L.icon({
    iconUrl: CustomMarkerIcon, // Path to your PNG file
    iconSize: [64, 64], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor relative to the icon
  });

  return (
    <div className="w-[80vw] h-[40vh] z-0 lg:w-[35vw] lg:h-[69vh]">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={position}
        attributionControl={true}
        zoom={17}
        minZoom={3}
        scrollWheelZoom={true}
      >
        <ComponentResize />
        <TileLayer
          // className={'ion-hide'}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
