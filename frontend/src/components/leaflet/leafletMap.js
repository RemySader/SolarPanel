import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletMap.css'

const leafletMap = () => {
    // Beirut's latitude and longitude
    const position = [33.895, 35.4785];

    return (
        <div>
        <div className='card'>
            
        <MapContainer center={position} zoom={8} style={{ width: '100%', height: '400px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Beirut, Lebanon
                </Popup>
            </Marker>
        </MapContainer>
        </div>
        </div>
    );
}

export default leafletMap;
