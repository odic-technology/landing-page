import React from 'react'
import { Link } from 'react-router-dom'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'

import Matchfy1 from '../../../assets/slide1.png'
import Matchfy2 from '../../../assets/slide2.png'
import Matchfy3 from '../../../assets/slide3.png'
import Turbo1 from '../../../assets/slide4.png'
import Turbo2 from '../../../assets/slide5.png'

import './designStyle.css'

export default function Design () {
  return (
    <div className='portifolioDesign'>
      <OdicHeader />
      <PortifolioHeader title='Design de Interfaces' />
      <div className='divCard'>
        <text className='title'>Matchfy</text>
        <text className='subTitle'>Aplicativo de relacionamentos entre universitários</text>
        <img src={Matchfy1} alt='card' />
        <img src={Matchfy2} alt='card' />
        <img src={Matchfy3} alt='card' />
        <text className='title'>Turbo Máquinas</text>
        <text className='subTitle'>Folder empresarial</text>
        <img src={Turbo1} alt='card' />
        <img src={Turbo2} alt='card' />
      </div>
    </div>
  )
}
