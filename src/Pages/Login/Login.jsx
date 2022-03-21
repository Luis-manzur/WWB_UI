import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Components/Banner/Banner';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Hero className = 'loginHero'>
        <Banner title='Iniciar Sesión' >
          <input placeholder = 'email' className='loginInput'></input>
          <input placeholder = 'password' className='loginInput'></input>
        </Banner>
      </Hero>
      <form>
      </form>
    </div>
  )
}

export default Login