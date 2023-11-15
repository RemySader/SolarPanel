import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletMap.css'

const leafletMap = () => {
    // Beirut's latitude and longitude
    const position = [33.895, 35.4785];

    return (
        <section className='lebanonMap'>

            <div>
                <h1>gaba</h1>
            </div>


            <div className='card'>
                <MapContainer center={position} zoom={8} style={{ width: '100%', height: '400px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                        />
                </MapContainer>
            </div>

        </section>
    );
}

export default leafletMap;
