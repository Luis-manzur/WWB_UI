import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';
import '../../../src/index.css';
import AboutWWB from '../../Components/AboutWWB/AboutWWB';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './LandingPage.css';
import Slider from '../../Components/Slider/Slider';
import LogIn from '../Login/LogIn';


function LandingPage() {
  return (
    <>
      <Hero>
        <Banner title='World Wide Booking' text='The world just a few clicks away'>
            <Link to='/search' className = 'landingPageLink'>Search Hotels</Link>
        </Banner>
      </Hero>
      <AboutWWB />
      <Title title = 'Destinations:' />
      
      <Slider imgSrc={'https://pix10.agoda.net/hotelImages/63507/0/4788ba71e0ed5e6886fa91e09808a2fa.jpg?ca=7&ce=1&s=1024x768'} title={'Le Méridien'} text={'Giza - Egypt' } flipped = {true}/>
      <Slider imgSrc={'https://www.followmeaway.com/wp-content/uploads/2019/05/eiffel-tower-view-hotels-Pullman.jpg'} title={'Shangri-La Hotel'} text={'Paris - France'} />
      <Slider imgSrc={'https://hotelhumboldtve.com/wp-content/uploads/2020/02/by_CarolinaRivas-2-5.jpg'} title={'Hotel Humboldt'} text={'Caracas - Venezuela'} flipped = {true}/>
      <Slider imgSrc={'https://www.hotelscombined.es/himg/db/34/32/leonardo-2665800-BOR_067_S-445774.jpg'} title={'Four Seasons'} text={'Bora Bora - French Polynesia'} />

      <h4 className='muchMore'>And much more...</h4>
      <div className='lineBreak'></div>
      <Footer />
      
    </>
  )
}

export default LandingPage