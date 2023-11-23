import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './testimonials.css'
import image1 from './testimonialsImages/image1.jpg'
import image2 from './testimonialsImages/image2.jpg'
import image3 from './testimonialsImages/image3.jpg'

export default class Testimonials extends Component {
    render() {
        return (
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            <div style={{margin: '2%'}}>
              <img src={image1} alt="image 1"/>
              <div className="myCarousel">
                <h3>Shirley Haddad</h3>
                <h4>Designer</h4>
                <p>
                  Solar Wave transformed the way I think about energy. Selling my excess solar power is not
                   just eco-friendly but also financially rewarding. A community-driven platform that's changing
                  the game!
                </p>
              </div>
            </div>
    
            <div style={{margin: '2%'}}>
              <img src={image2} alt="image 2"/>
              <div className="myCarousel">
                <h3>Daniel Fares</h3>
                <h4>Electrical Engineer</h4>
                <p>
                  As a buyer, finding and purchasing clean energy on Solar Wave was a breeze. 
                  The transparency and local focus make it my go-to for sustainable power. 
                  Cheers to a brighter, greener future!
                </p>
              </div>
            </div>
    
            <div style={{margin: '2%'}}>
              <img src={image3} alt="image 3"/>
              <div className="myCarousel">
                <h3>Theo Hajj</h3>
                <h4>CCE</h4>
                <p>
                  Joining Solar Wave was a game-changer for our neighborhood. 
                  We're not just reducing our carbon footprint but creating a stronger, more connected community. 
                  Proud to be part of the clean energy revolution!
                </p>
              </div>
            </div>
          </Carousel>
        );
      }
    }