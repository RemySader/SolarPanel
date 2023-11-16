import HeroSection from '../components/heroSection/heroSection';
import Lebanon from '../components/leaflet/leafletMap'
import Scroll from '../components/card/scroll'

function Home() {
  return (
    <div className="Home">
        <HeroSection/>
        <Lebanon />
        <Scroll />
    </div>
  );
}

export default Home;