import React from 'react';
import Hero from '../Components/Hero';
import './HomePage.css';
import Slider from '../Components/Slider';
import SignUp from '../Components/SingUp';

export default function HomePage() {
  return (
    <section className='homePage'>
        <Hero />
        <Slider imgSrc ={'https://wallpapercave.com/wp/4xZdAJ6.jpg'} title ={'Explora el mundo con nosotros!'} text = {'Paris - Francia'}/>
        <Slider imgSrc ={'https://wallpaperaccess.com/full/232806.jpg'} flipped={true} title ={'El viaje que siempre has querido hacer.'} text = {'New York - EEUU'} />
        <Slider imgSrc ={'https://pbs.twimg.com/media/CZU7YDIWkAITbkE.jpg'} title ={'Solo a unos cuantos clicks.'} text = {'Pico Espejo - Venezuela'}/>
        <SignUp />
    </section>
  )
}


