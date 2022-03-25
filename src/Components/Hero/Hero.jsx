import React from 'react';
import './Hero.css';

function Hero({ children }) {
  return (
    <div>
        <div className='heroContainer'>
            <img src='https://www.10wallpaper.com/wallpaper/2560x1600/1607/Moraine_lake_canada-Scenery_High_Quality_Wallpaper_2560x1600.jpg'></img>
            <img className='topImage' src='https://cdn.webhotelier.net/photos/w=1920/viewhotel/L266539.jpg'></img>
            {children}
        </div>
    </div>
  )
}

export default Hero