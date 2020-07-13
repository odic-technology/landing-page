import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'
import Matchfy from '../../../assets/banner-matchfy.png'
import Museu from '../../../assets/banner-museu.png'

import './mobileStyle.css'

export default function Mobile () {
  return (
    <div className='portifolioMobile'>
      <OdicHeader />
      <PortifolioHeader title='Aplicativos Mobile' />
      <div className='divCard'>
        <img src={Matchfy} alt='card' className='matchfy' />
        <img src={Museu} alt='card' />
      </div>
    </div>
  )
}
