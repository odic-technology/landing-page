import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'
import Matchfy from '../../../assets/bannerMatchfy.png'
import Museu from '../../../assets/bannerMuseu.png'

import './mobileStyle.css'

export default function Mobile () {
  return (
    <div className='portifolioMobile'>
      <OdicHeader />
      <PortifolioHeader title='Aplicativos Mobile' />
      <div className='divCard'>
        <img src={Matchfy} alt='card' />
        <img src={Museu} alt='card' />
      </div>
    </div>
  )
}
