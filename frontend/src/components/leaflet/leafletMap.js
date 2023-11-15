import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './leafletMap.css';
import Button from '@mui/material/Button';


const leafletMap = () => {
    // Beirut's latitude and longitude
    const position = [33.895, 35.4785];

    return (
        <section className='lebanonMap'>

            <div >
                <h2>Save Money</h2>
                <h3>Find your nearest plantation</h3>
                <p className='paragraphe-1'>No need to spend countless amount of money on electricity bills <br/>Contact the owner of the solar panels and start saving NOW</p>
                <Button variant="contained" style={{backgroundColor:'#FFC857',color:'rgba(12, 12, 12, 0.87)',fontWeight:'900',fontSize:'20px',width:'150px',borderRadius:'80px'}}>Sign Up</Button>
                <div className='ads'>
                    <p className='number'>50+</p>
                    <p className='desc'>We are pround to annoce that we have exeeded over 50 locations all over lebanon</p>
                </div>



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
