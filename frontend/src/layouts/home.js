import HeroSection from '../components/heroSection/heroSection';
import Lebanon from '../components/leaflet/leafletMap'
import Navbar from '../components/header/header'
import Cards from '../components/card/scroll'

function Home() {
  return (
    <div className="Home">
        <Navbar/>
        <HeroSection/>
        <Lebanon />
        <Cards />
    </div>
  );
}

export default Home;