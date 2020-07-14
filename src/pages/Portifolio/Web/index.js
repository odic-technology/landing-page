import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'
import Matchfy from '../../../assets/cardMatchfy.svg'
import './webStyle.css'

export default function Web () {
  return (
    <div className='portifolioWeb'>
      <OdicHeader />
      <PortifolioHeader title='Páginas Web' />
      <div className='content'>
        <div className='contentBackground'>
          <div>
            <text>Nosso primeiro projeto web pode ser visto ao clicar no card ao lado, sinta-se a vontade!</text>
            <text>{<br />}Além disto, vale lembrar que este site que você está usando neste exato momento também foi feito por nós :)</text>
          </div>
        </div>
        <a target='_blank' rel='noopener noreferrer' href='https://matchfyapp.com'>
          <img src={Matchfy} alt='card' />
        </a>
      </div>
    </div>
  )
}
