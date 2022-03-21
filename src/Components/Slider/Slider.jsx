import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Slider.css';

const Slider = ({ imgSrc, title, text, flipped }) => {

  const { ref, inView } = useInView({
    threshold: 0.1,

  });

  const renderContent = () => {
    if(!flipped){
      return(
        <>
          <img src={imgSrc} alt='Image' className='sliderImage' />
          <div className='sliderContent'>
            <h1 className='sliderTitle'>{title}</h1>
            <p>{text}</p>
          </div>
        </>
      )
    }else{
      return(
        <>
          <div className='sliderContent'>
            <h1 className='sliderTitle'>{title}</h1>
            <p>{text}</p>
          </div>
          <img src={imgSrc} alt='Image' className='sliderImage' />
        </>
      );
    }
  };

  return (
    <div className={inView ? 'slider sliderZoom' : 'slider'} ref={ref}>{renderContent()}</div>
  )
}

export default Slider;