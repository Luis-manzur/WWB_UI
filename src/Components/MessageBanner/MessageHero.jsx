import React from 'react';
import './MessageBanner.css';


function MessageHero({ src, children }) {
  return (
    <div>
      <div className='messageHeroContainer'>
          <img classname = 'img' src={src}></img>
          {children}
      </div>
    </div>
  )
}

export default MessageHero;