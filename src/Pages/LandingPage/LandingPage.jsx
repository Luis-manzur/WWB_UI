import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';
import Login from '../Login/Login';
import '../../../src/index.css';
import AboutWWB from '../../Components/AboutWWB/AboutWWB';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './LandingPage.css';
import Slider from '../../Components/Slider/Slider';


function LandingPage() {
  return (
    <>
      <Hero>
        <Banner title='World Wide Booking' text='El mundo a solo unos clicks de distancia'>
            <Link to='/login' element={<Login></Login>} className = 'landingPageLink'>Buscar hoteles</Link>
        </Banner>
      </Hero>
      <AboutWWB />
      <Title title = 'Destinos:' />
      
      <Slider imgSrc={'https://pix10.agoda.net/hotelImages/63507/0/4788ba71e0ed5e6886fa91e09808a2fa.jpg?ca=7&ce=1&s=1024x768'} title={'Le Méridien'} text={'Guiza - Egipto' } flipped = {true}/>
      <Slider imgSrc={'https://www.followmeaway.com/wp-content/uploads/2019/05/eiffel-tower-view-hotels-Pullman.jpg'} title={'Shangri-La Hotel'} text={'Paris - Francia'} />
      <Slider imgSrc={'https://hotelhumboldtve.com/wp-content/uploads/2020/02/by_CarolinaRivas-2-5.jpg'} title={'Hotel Humboldt'} text={'Caracas - Venezuela'} flipped = {true}/>
      <Slider imgSrc={'https://www.hotelscombined.es/himg/db/34/32/leonardo-2665800-BOR_067_S-445774.jpg'} title={'Four Seasons'} text={'Bora Bora - Polinesia Francesa'} />

      <h4 className='muchMore'>Y muchos más...</h4>
      <div className='lineBreak'></div>
      <Footer />
      
    </>
  )
}

export default LandingPage