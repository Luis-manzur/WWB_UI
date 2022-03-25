import React from 'react';
import './Banner.css';

function Banner({ title, text, children }) {
  return (
    <div className='banner'>
        <h1>{title}</h1>
        <div></div>
        <p>{text}</p>
        {children}
    </div>
  )
}

export default Banner