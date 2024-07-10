
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = L.icon({
    iconUrl:'fast_run_running_icon.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35]
});

const MapComponent = () => {
    return (
        <MapContainer center={[60.317222, 24.963333]} zoom={12} style={{height:'400px', width:'100%'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
          />
          <Marker position={[60.317222, 24.963333]} icon={customIcon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
     </MapContainer> 
   );
}
export default MapComponent;
