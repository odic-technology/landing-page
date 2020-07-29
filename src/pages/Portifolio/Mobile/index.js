import React from 'react'

import OdicLogo from '../../../components/OdicLogo/OdicLogo'
import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'
import CardMobilePortifolio from '../../../components/CardMobilePortifolio/CardMobilePortifolio'

import Matchfy from '../../../assets/bannerMatchfy.png'
import Museu from '../../../assets/bannerMuseu.png'
import Matchfy1 from '../../../assets/matchfy1.png'
import Matchfy2 from '../../../assets/matchfy2.png'
import Matchfy3 from '../../../assets/matchfy3.png'
import Desafio1 from '../../../assets/desafio1.png'
import Desafio2 from '../../../assets/desafio2.png'
import Desafio3 from '../../../assets/desafio3.png'

import './mobileStyle.css'

export default function Mobile () {
  return (
    <div className='portifolioMobile'>
      <OdicLogo hideInDesktop text='Portifólio' />
      <OdicHeader />
      <PortifolioHeader title='Aplicativos Mobile' />
      <div className='divCard'>
        <img src={Matchfy} alt='card' />
        <img src={Museu} alt='card' />
      </div>
      <CardMobilePortifolio title='Matchfy' isSoon subTitle='Aplicativo de relacionamentos entre universitários' image1={Matchfy1} image2={Matchfy2} image3={Matchfy3} backgroundColor='#0D8C7D' />
      <CardMobilePortifolio title='Grande Desafio 2020' subTitle='Aplicativo de competição educativa' image1={Desafio1} image2={Desafio2} image3={Desafio3} backgroundColor='#080F67' />
    </div>
  )
}
