import React from 'react';
import './Slider.css';
import { useInView } from 'react-intersection-observer';


const Slider = ({imgSrc, flipped, title, text}) => {

    const{ ref, inView, entry } = useInView({
        threshold: 0.4,

    })

    const renderContent = () =>{
        if(!flipped){
            return(
                <>
                    <img className='sliderImage' src = {imgSrc} alt='img' ></img>
                    <div className='sliderContent'>
                        <h1 className='stiderTitle'>{title}</h1>
                        <p className='sliderText'>{text}</p>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className='sliderContent'>
                        <h1 className='stiderTitle'>{title}</h1>
                        <p className='sliderText'>{text}</p>
                    </div>
                    <img className='sliderImage' src= {imgSrc} alt='img' ></img>
                </>   
            )
        }
    }
  return (
    <div className={ inView ? 'slider sliderZoom': 'slider'} ref={ref}>
        {renderContent()}
    </div>
  )
}

export default Slider;
