import React from 'react'

import './webStyle.css'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'

import Museu from '../../../assets/desafioPortifolio.png'
import MuseuMobile from '../../../assets/desafioPortifolioMobile.png'

export default function Web () {
  function renderImage () {
    if (window.innerWidth < 600) {
      return <img src={MuseuMobile} alt='Museu' />
    } else {
      return <img src={Museu} alt='Museu' />
    }
  }

  return (
    <div className='portifolioWeb'>
      <OdicHeader hasBackButton title='Grande Desafio 2020' pageSelected='Portifólio' />
      <PortifolioHeader title='Grande Desafio 2020' />
      <div className='divImage'>
        {renderImage()}
      </div>
    </div>
  )
}
