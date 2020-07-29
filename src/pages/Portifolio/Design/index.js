import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import OdicLogo from '../../../components/OdicLogo/OdicLogo'
import PortifolioHeader from '../../../components/PortifolioHeader/PortifolioHeader'

import Matchfy1 from '../../../assets/slide1.png'
import Matchfy2 from '../../../assets/slide2.png'
import Matchfy3 from '../../../assets/slide3.png'
import Turbo1 from '../../../assets/slide4.png'
import Turbo2 from '../../../assets/slide5.png'
import MatchfyMobile1 from '../../../assets/slideMobile1.png'
import MatchfyMobile2 from '../../../assets/slideMobile2.png'
import MatchfyMobile3 from '../../../assets/slideMobile3.png'
import TurboMobile1 from '../../../assets/slideMobile4.png'
import TurboMobile2 from '../../../assets/slideMobile5.png'

import './designStyle.css'

export default function Design () {
  function renderSlide1 () {
    if (window.innerWidth < 600) {
      return <img src={MatchfyMobile1} alt='card' />
    } else {
      return <img src={Matchfy1} alt='card' />
    }
  }

  function renderSlide2 () {
    if (window.innerWidth < 600) {
      return <img src={MatchfyMobile2} alt='card' />
    } else {
      return <img src={Matchfy2} alt='card' />
    }
  }

  function renderSlide3 () {
    if (window.innerWidth < 600) {
      return <img src={MatchfyMobile3} alt='card' />
    } else {
      return <img src={Matchfy3} alt='card' />
    }
  }

  function renderSlide4 () {
    if (window.innerWidth < 600) {
      return <img src={TurboMobile1} alt='card' />
    } else {
      return <img src={Turbo1} alt='card' />
    }
  }

  function renderSlide5 () {
    if (window.innerWidth < 600) {
      return <img src={TurboMobile2} alt='card' />
    } else {
      return <img src={Turbo2} alt='card' />
    }
  }

  return (
    <div className='portifolioDesign'>
      <OdicLogo hideInDesktop text='Portifólio' />
      <OdicHeader />
      <PortifolioHeader title='Design de Interfaces' />
      <div className='divCard'>
        <text className='title'>Matchfy</text>
        <text className='subTitle'>Aplicativo de relacionamentos entre universitários</text>
        {renderSlide1()}
        {renderSlide2()}
        {renderSlide3()}
        <text className='title'>Turbo Máquinas</text>
        <text className='subTitle'>Folder empresarial</text>
        {renderSlide4()}
        {renderSlide5()}
      </div>
    </div>
  )
}
