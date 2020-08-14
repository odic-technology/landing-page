import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import OdicLogo from '../../components/OdicLogo/OdicLogo'
import OdicHeader from '../../components/Header/OdicHeader'
import Mobile from '../../assets/mobileIcon.svg'
import MobileWhite from '../../assets/mobileIconWhite.svg'
import Web from '../../assets/webIcon.svg'
import WebWhite from '../../assets/webIconWhite.svg'
import Design from '../../assets/designIcon.svg'
import DesignWhite from '../../assets/designIconWhite.svg'

import './portifolioStyle.css'

export default function Portfolio () {
  const [hoverMobile, setHoverMobile] = useState(false)
  const [hoverWeb, setHoverWeb] = useState(false)
  const [hoverDesign, setHoverDesign] = useState(false)

  return (
    <div className='portifolio'>
      <OdicLogo hideInDesktop text='Portifólio' />
      <OdicHeader />
      <div>
        <text className='title'>Portifólio</text>
      </div>
      <div>
        <div>
          <text className='subTitle'>Navegue pelas categorias:</text>
        </div>
        <div className='cards'>
          <div className='cardRow'>
            <Link to='/mobile'>
              <div
                className={hoverMobile ? 'cardMobile cardMobileBackground' : 'cardMobile'}
                onTouchStart={() => setHoverMobile(true)}
                onTouchEnd={() => setHoverMobile(false)}
                onMouseEnter={() => setHoverMobile(true)}
                onMouseLeave={() => setHoverMobile(false)}
              >
                <text className={hoverMobile ? 'textHover' : ''}>Aplicativos Mobile</text>
                {hoverMobile ? <img src={MobileWhite} alt='mobile' /> : <img src={Mobile} alt='mobile' />}
              </div>
            </Link>
          </div>
          <div className='cardRow'>
            <Link to='/web'>
              <div
                className={hoverWeb ? 'cardWeb cardWebBackground' : 'cardWeb'}
                onTouchStart={() => setHoverWeb(true)}
                onTouchEnd={() => setHoverWeb(false)}
                onMouseEnter={() => setHoverWeb(true)}
                onMouseLeave={() => setHoverWeb(false)}
              >
                <text className={hoverWeb ? 'textHover' : ''}>Páginas Web</text>
                {hoverWeb ? <img src={WebWhite} alt='web' /> : <img src={Web} alt='web' />}
              </div>
            </Link>
          </div>
          <div className='cardRow'>
            <Link to='/design'>
              <div
                className={hoverDesign ? 'cardDesign cardDesignBackground' : 'cardDesign'}
                onTouchStart={() => setHoverDesign(true)}
                onTouchEnd={() => setHoverDesign(false)}
                onMouseEnter={() => setHoverDesign(true)}
                onMouseLeave={() => setHoverDesign(false)}
              >
                <text className={hoverDesign ? 'textHover' : ''}>Design de Interfaces</text>
                {hoverDesign ? <img src={DesignWhite} alt='design' /> : <img src={Design} alt='design' />}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
