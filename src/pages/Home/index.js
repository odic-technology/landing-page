import OdicHeader from '../../components/Header/OdicHeader'

import React from 'react'
import Banner from '../../assets/banner.png'
import './style.css'
import OdicLogo from '../../components/OdicLogo/OdicLogo'

function App () {
  return (
    <>
      <OdicHeader />
      <div class='home'>
        <div className='divHomeBanner'>
          <img src={Banner} className='homeBanner' alt='banner' />
        </div>
        <div class='homeInfo'>
          <OdicLogo />
          <div align='middle' className='homeDiv'>
            <div>
              <h1 className='homeTitle'>Somos a empresa digital preparada para te acompanhar à 4ª Revolução Industrial.</h1>
              <hr className='homeLine' />
              <p className='homeSubTitle'>Criamos soluções inovadoras para apps, sites e designs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
