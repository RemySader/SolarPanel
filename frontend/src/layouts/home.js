import HeroSection from '../components/heroSection/heroSection';
import Lebanon from '../components/leaflet/leafletMap'
// import Signin from '../components/form/signin'
import Navbar from '../components/header/header'
// import SignUp from '../components/form/signup';
import Cards from '../components/card/scroll'

function Home() {
  return (
    <div className="Home">
        {/* <Signin/>
        <SignUp/> */}
        <Navbar/>
        <HeroSection/>
        <Lebanon />
        <Cards />
        
    </div>
  );
}

export default Home;