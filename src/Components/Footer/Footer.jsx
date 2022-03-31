import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/index.css';
import LogIn from '../../Pages/Login/LogIn';

import './Footer.css';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import SingUp from '../../Pages/Register/SingUp';

function Footer() {
  return (
    <div className='footerContainer'>
        <section className='footerContent'>
            <p className='footerHeading'>
                Join the World Booking experience and plan the vacations you have always wanted.
            </p>
            <p className='footerText'>
                We offer thousands of hotels all over the world. 
            </p>

            <div className='footerLinks'>
                <div className='footerLinkWrapper'>
                    <div className='footerLinkItems'>
                        <Link to='/register' element={<SingUp />} className = 'landingPageLink'>Sign</Link>
                        <Link to='/login' element={<LogIn />} className = 'landingPageLink'>Log In</Link>
                        <Link to='/about' element={<AboutUs />} className = 'landingPageLink'>About us</Link>
                    </div>
                </div>
            </div>

            <h6 className='footerAdress'>
            Autopista Francisco Fajardo - Distribuidor Metropolitano Zona Rental Universidad Metropolitana, Urb. Terrazas del Ávila, Estado Miranda, Caracas - Venezuela Zip Code 1060
            </h6>

            
        </section>
        
    </div>
  )
}

export default Footer