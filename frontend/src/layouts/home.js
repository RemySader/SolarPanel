import HeroSection from '../components/heroSection/heroSection';
import Lebanon from '../components/leaflet/leafletMap'

function Home() {
  return (
    <div className="Home">
        <HeroSection/>
        <Lebanon />
        
    </div>
  );
}

export default Home;