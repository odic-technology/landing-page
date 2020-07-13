import React from 'react'
import OdicHeader from '../../components/OdicHeader'
import { Row, Col, Layout } from 'antd'

import Mobile from '../../assets/mobileIcon.svg'
import Web from '../../assets/webIcon.svg'
import Design from '../../assets/designIcon.svg'
import { Link } from 'react-router-dom'

import './portifolioStyle.css'

const { Content } = Layout
export default function Portfolio () {
  return (
    <div className='portifolio'>
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
            <div className='cardMobile'>
              <text>Aplicativos Mobile</text>
              <img src={Mobile} />
            </div>
          </Col>
          <Col className='cardRow'>
            <div className='cardWeb'>
              <text>Páginas Web</text>
              <img src={Web} />
            </div>
          </Col>
          <Col className='cardRow'>
            <div className='cardDesign'>
              <text>Design de Interfaces</text>
              <img src={Design} />
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  )
}
