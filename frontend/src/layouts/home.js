import HeroSection from '../components/heroSection/heroSection';
import Lebanon from '../components/leaflet/leafletMap'
import Navbar from '../components/header/header'
import Cards from '../components/card/scroll'
import Footer from '../components/footer/footer'
import AboutUsHome from '../components/about us/aboutusHome'
import Testimonial from '../components/testimonials/testimonials'
// import AboutUs from '../components/about us/aboutus'

function Home() {
  return (
    <div className="Home">
        <Navbar/>
        <HeroSection/>
        <Lebanon />
        <Cards />
        <AboutUsHome />
        <Testimonial />
        <Footer />
        {/* <AboutUs /> */}
    </div>
  );
}

export default Home;