import OdicHeader from '../../components/Header/OdicHeader'

import React from 'react'
import Banner from '../../assets/banner.png'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import './style.css'
import odicLogo from '../../assets/odicNameLogo.svg'

function App () {
  return (
    <>
      <OdicHeader />
      <Row>
        <Col span={11} className='divHomeBanner'>
          <img src={Banner} className='homeBanner' alt='banner' />
        </Col>
        <Col span={13}>
          <img className='odicLogo' src={odicLogo} alt='logo' />
          <Row align='middle' className='homeDiv'>
            <Col>
              <h1 className='homeTitle'>Somos a empresa digital preparada para te acompanhar à 4ª Revolução Industrial.</h1>
              <hr className='homeLine' />
              <p className='homeSubTitle'>Criamos soluções inovadoras para apps, sites e designs.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default App
