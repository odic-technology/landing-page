import React from 'react'
import { Link } from 'react-router-dom'

import ArrowBack from '../../assets/back-arrow.svg'
import './pHeaderStyle.css'

export default function PortifolioHeader ({ title }) {
  return (
    <div className='portifolioHeader'>
      <Link to='/portfolio'>
        <img src={ArrowBack} alt='arrow' />
      </Link>
      <text>{title}</text>
    </div>
  )
}
