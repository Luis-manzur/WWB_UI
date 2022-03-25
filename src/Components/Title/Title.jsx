import React from 'react';
import './Title.css'

export default function Title({ title }) {
  return (
    <div className='sectionTitle'>
        <h4>{title}</h4>
        <div></div>
    </div>
  )
}
