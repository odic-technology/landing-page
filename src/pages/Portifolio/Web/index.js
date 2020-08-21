import React from 'react'

import OdicLogo from '../../../components/OdicLogo/OdicLogo'
import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'
import Museu from '../../../assets/desafioPortifolio.png'
import './webStyle.css'

export default function Web () {
  return (
    <div className='portifolioWeb'>
      <OdicLogo hideInDesktop text='Portifólio' />
      <OdicHeader hasBackButton title='Grande Desafio 2020' />
      <div className='divImage'>
        <img src={Museu} />
      </div>
    </div>
  )
}
