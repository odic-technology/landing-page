import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'

import Matchfy from '../../../assets/matchfyPortifolio.png'
import MatchfyMobile from '../../../assets/matchfyPortifolioMobile.png'

import './mobileStyle.css'

export default function Mobile () {
  function renderImage () {
    if (window.innerWidth < 600) {
      return <img src={MatchfyMobile} alt='Matchfy' />
    } else {
      return <img src={Matchfy} alt='Matchfy' />
    }
  }

  return (
    <div className='portifolioMobile'>
      <OdicHeader hasBackButton title='Matchfy' pageSelected='Portifólio' />
      <PortifolioHeader title='Matchfy' />
      <div className='divImage'>
        {renderImage()}
      </div>
    </div>
  )
}
