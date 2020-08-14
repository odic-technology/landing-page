import React from 'react'

import odicLogo from '../../assets/odicNameLogo.svg'
import './odicLogoStyle.css'

export default function PortifolioHeader ({ text }) {
  return (
    <>
      <div className='odicLogo'>
        <img src={odicLogo} alt='logo' />
        <div className={!text ? 'hideItem' : 'hideDesktop'}>
          <text>__</text>
          <text>{text}</text>
        </div>
      </div>
    </>
  )
}
