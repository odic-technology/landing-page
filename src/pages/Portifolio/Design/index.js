import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import OdicLogo from '../../../components/OdicLogo/OdicLogo'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'

import TurboMaquinas from '../../../assets/turboMaquinasPortifolio.png'
import TurboMaquinasMobile from '../../../assets/turboMaquinasPortifolioMobile.png'

import './designStyle.css'

export default function Design () {
  function renderImage () {
    if (window.innerWidth < 600) {
      return <img src={TurboMaquinasMobile} />
    } else {
      return <img src={TurboMaquinas} />
    }
  }

  return (
    <div className='portifolioDesign'>
      <OdicLogo hideInDesktop text='Portifólio' />
      <OdicHeader hasBackButton title='Turbo Máquinas' />
      <div className='divImage'>
        {renderImage()}
      </div>
    </div>
  )
}
