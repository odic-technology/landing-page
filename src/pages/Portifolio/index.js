import React, { useState } from 'react'
import { Row, Col } from 'antd'
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
      <Row>
        <text className='title'>Portifólio</text>
      </Row>
      <Row>
        <Row>
          <text className='subTitle'>Navegue pelas categorias:</text>
        </Row>
        <Row className='cards'>
          <Col className='cardRow'>
            <Link to='/mobile'>
              <div className='cardMobile' onMouseEnter={() => setHoverMobile(true)} onMouseLeave={() => setHoverMobile(false)}>
                <text className={hoverMobile ? 'textHover' : ''}>Aplicativos Mobile</text>
                {hoverMobile ? <img src={MobileWhite} alt='mobile' /> : <img src={Mobile} alt='mobile' />}
              </div>
            </Link>
          </Col>
          <Col className='cardRow'>
            <Link to='/web'>
              <div className='cardWeb' onMouseEnter={() => setHoverWeb(true)} onMouseLeave={() => setHoverWeb(false)}>
                <text className={hoverWeb ? 'textHover' : ''}>Páginas Web</text>
                {hoverWeb ? <img src={WebWhite} alt='web' /> : <img src={Web} alt='web' />}
              </div>
            </Link>
          </Col>
          <Col className='cardRow'>
            <Link to='/design'>
              <div className='cardDesign' onMouseEnter={() => setHoverDesign(true)} onMouseLeave={() => setHoverDesign(false)}>
                <text className={hoverDesign ? 'textHover' : ''}>Design de Interfaces</text>
                {hoverDesign ? <img src={DesignWhite} alt='design' /> : <img src={Design} alt='design' />}
              </div>
            </Link>
          </Col>
        </Row>
      </Row>
    </div>
  )
}
