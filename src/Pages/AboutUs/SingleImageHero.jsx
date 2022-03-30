import React from 'react';
import './SingleImageHero.css';


function Hero({ src, children }) {
  return (
    <div>
      <div className='singleImageHeroContainer'>
          <img src={src}></img>
          {children}
      </div>
    </div>
  )
}

export default Hero