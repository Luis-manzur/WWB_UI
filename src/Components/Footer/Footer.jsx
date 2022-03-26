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
                Unete a nuestra plataforma para que puedas comenzar a planificar el viaje que siempre has querido hacer.
            </p>
            <p className='footerText'>
                Contamos con miles de hoteles alrededor del mundo en cientos de paises.
            </p>

            <div className='footerLinks'>
                <div className='footerLinkWrapper'>
                    <div className='footerLinkItems'>
                        <Link to='/register' element={<SingUp />} className = 'landingPageLink'>Registrate</Link>
                        <Link to='/login' element={<LogIn />} className = 'landingPageLink'>Inicio sesión</Link>
                        <Link to='/about' element={<AboutUs />} className = 'landingPageLink'>About us</Link>
                    </div>
                </div>
            </div>

            <h6 className='footerAdress'>
            Autopista Gran Mariscal de Ayacucho - Ditribuidor Metropolitano Zona Rental Universidad Metropolitana, Urb. Terrazas del Ávila, Estado Miranda, Caracas - Venezuela código postal 1060
            </h6>

            
        </section>
        
    </div>
  )
}

export default Footer