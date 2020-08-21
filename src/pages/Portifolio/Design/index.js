import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import OdicLogo from '../../../components/OdicLogo/OdicLogo'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'

import TurboMaquinas from '../../../assets/turboMaquinasPortifolio.png'

import './designStyle.css'

export default function Design () {
  function renderSlide1 () {
    if (window.innerWidth < 600) {
      return <img src={TurboMaquinas} alt='card' />
    } else {
      return <img src={TurboMaquinas} alt='card' />
    }
  }

  return (
    <div className='portifolioDesign'>
      <OdicLogo hideInDesktop text='Portifólio' />
      <OdicHeader hasBackButton title='Turbo Máquinas' />
      <div className='divImage'>
        <img src={TurboMaquinas} />
      </div>
    </div>
  )
}
