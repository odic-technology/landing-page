import React from 'react'

import './style.css'

import OdicHeader from '../../components/Header/OdicHeader'
import Banner from '../../assets/bannerHomeScreen.svg'

function App () {
  return (
    <>
      <OdicHeader isHalfHeader />
      <div className='home'>
        <div className='divHomeBanner'>
          <img src={Banner} className='homeBanner' alt='banner' />
        </div>
        <div className='homeInfo flexDirection textBorderBottom'>
          <p className='textTitle'>Somos a empresa digital preparada para te acompanhar à 4ª Revolução Industrial.</p>
          <div />
          <p className='homeSubTitle'>Criamos soluções inovadoras para apps, sites e designs.</p>
        </div>
      </div>
    </>
  )
}

export default App
