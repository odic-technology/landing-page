import React from 'react'
import { Link } from 'react-router-dom'

import './portfolioCardStyle.css'

export default function Portfolio ({ image, imageMobile, number, title, description, page, isInverted }) {
  function getImage () {
    if (window.innerWidth < 600) {
      return (
        <img src={imageMobile} alt='Portfolio Card' />
      )
    } else {
      return (
        <img src={image} alt='Portfolio Card' />
      )
    }
  }
  return (
    <div className={isInverted ? 'cardInverted portfolioCard' : 'portfolioCard'}>
      {getImage()}
      <div className={isInverted ? 'cardDivInverted' : ''}>
        <p className='number'>{number}</p>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
        <button>
          <Link to={page}><p>VER PROJETO</p></Link>
        </button>
      </div>
    </div>
  )
}
