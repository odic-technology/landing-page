import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'

import TurboMaquinas from '../../../assets/turboMaquinasPortifolio.png'
import TurboMaquinasMobile from '../../../assets/turboMaquinasPortifolioMobile.png'

import './designStyle.css'

export default function Design () {
  function renderImage () {
    if (window.innerWidth < 600) {
      return <img src={TurboMaquinasMobile} alt='TurboMaquinas' />
    } else {
      return <img src={TurboMaquinas} alt='TurboMaquinas' />
    }
  }

  return (
    <div className='portifolioDesign'>
      <OdicHeader hasBackButton title='Turbo Máquinas' pageSelected='Portifólio' />
      <PortifolioHeader title='Turbo Máquinas' />
      <div className='divImage'>
        {renderImage()}
      </div>
    </div>
  )
}
