import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'

import Matchfy from '../../../assets/matchfyPortifolio.png'
import MatchfyMobile1 from '../../../assets/matchfyPortifolioMobile1.png'
import MatchfyMobile2 from '../../../assets/matchfyPortifolioMobile2.png'

import './mobileStyle.css'

export default function Mobile () {
  function renderImage () {
    if (window.innerWidth < 600) {
      return (
        <>
          <img src={MatchfyMobile1} alt='Matchfy' />
          <img src={MatchfyMobile2} alt='Matchfy' />
        </>
      )
    } else {
      return <img src={Matchfy} alt='Matchfy' />
    }
  }

  return (
    <div className='portifolioMobile'>
      <OdicHeader hasBackButton hasBackButtonMobile title='Matchfy' pageSelected='Portfólio' />
      <div className='divImage'>
        {renderImage()}
      </div>
    </div>
  )
}
