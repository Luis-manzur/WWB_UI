import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Components/Banner/Banner';
import LandingPage from '../LandingPage/LandingPage';
import '../../../src/index.css';

function ErrorPage() {
  return (
    <div>
      <Banner title='ERROR: 404' text='Página no encontrada'>
        <Link to='/' element={<LandingPage></LandingPage> } className = 'landingPageLink'>Home</Link>
      </Banner>
    </div>
  )
}

export default ErrorPage;

