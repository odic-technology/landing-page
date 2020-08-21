import React from 'react'

import OdicLogo from '../../../components/OdicLogo/OdicLogo'
import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'
import CardMobilePortifolio from '../../../components/CardMobilePortifolio/CardMobilePortifolio'

import Matchfy from '../../../assets/matchfyPortifolio.png'

import './mobileStyle.css'

export default function Mobile () {
  return (
    <div className='portifolioMobile'>
      <OdicLogo hideInDesktop text='Portifólio' />
      <OdicHeader hasBackButton title='Matchfy' />
      <div className='divImage'>
        <img src={Matchfy} />
      </div>
    </div>
  )
}
