import React from 'react'

import './webStyle.css'

import OdicHeader from '../../../components/Header/OdicHeader'

import Museu from '../../../assets/desafioPortifolio.png'
import MuseuMobile1 from '../../../assets/desafioPortifolioMobile1.png'
import MuseuMobile2 from '../../../assets/desafioPortifolioMobile2.png'

export default function Web () {
  function renderImage () {
    if (window.innerWidth < 600) {
      return (
        <>
          <img src={MuseuMobile1} alt='Museu' />
          <img src={MuseuMobile2} alt='Museu' />
        </>
      )
    } else {
      return <img src={Museu} alt='Museu' />
    }
  }

  return (
    <div className='portifolioWeb'>
      <OdicHeader hasBackButton hasBackButtonMobile title='Grande Desafio 2020' pageSelected='Portfólio' />
      <div className='divImage'>
        {renderImage()}
      </div>
    </div>
  )
}
