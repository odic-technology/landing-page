import React, { useState } from 'react'
import OdicHeader from '../../components/Header/OdicHeader'
import { Row, Col } from 'antd'

import ContactRightColumn from '../../components/ContactRightCol'
import ContactForm from '../../components/ContactForm'
import ContactSuccess from '../../components/ContactSuccess'
import Smile from '../../assets/smileIcon.svg'

import './contactStyle.css'

export default function Contact () {
  const [typeSelected, setTypeSelected] = useState(1)

  const [isFirstSelected, setIsFirstSelected] = useState(false)
  const [isSecondSelected, setIsSecondSelected] = useState(false)
  const [isThirdSelected, setIsThirdSelected] = useState(false)

  const [quantitySelected, setQuantitySelected] = useState(0)

  const [formAvailable, setFormAvailable] = useState(1)

  function selectItem () {
    if (typeSelected === 1) {
      if (!isFirstSelected) setQuantitySelected(quantitySelected + 1)
      else setQuantitySelected(quantitySelected - 1)
      setIsFirstSelected(!isFirstSelected)
    } else if (typeSelected === 2) {
      if (!isSecondSelected) setQuantitySelected(quantitySelected + 1)
      else setQuantitySelected(quantitySelected - 1)
      setIsSecondSelected(!isSecondSelected)
    } else if (typeSelected === 3) {
      if (!isThirdSelected) setQuantitySelected(quantitySelected + 1)
      else setQuantitySelected(quantitySelected - 1)
      setIsThirdSelected(!isThirdSelected)
    }
  }

  return (
    <div className='contact'>
      <OdicHeader />
      <Row>
        <Col span={14} className='leftCol'>
          <text className='title'>Contato</text>
          <div className='divSubTitle'>
            <text>Olá!</text>
            <text>Esperamos que tenha gostado</text>
            <text>do nosso trabalho e agradecemos pela visita! <img src={Smile} alt='smile' /></text>
          </div>
          <div className='divContact'>
            <div>
              <text><text>E-mail:</text> odic.team@gmail.com</text>
              <text><text>Celular:</text> (19) 99653-5534</text>
            </div>
          </div>
        </Col>
        <Col span={10} className='rightCol'>
          <div className={formAvailable !== 1 ? 'hide' : ''}>
            <ContactRightColumn setTypeSelected={setTypeSelected} typeSelected={typeSelected} isFirstSelected={isFirstSelected} isSecondSelected={isSecondSelected} isThirdSelected={isThirdSelected} selectItem={selectItem} quantitySelected={quantitySelected} setFormAvailable={setFormAvailable} />
          </div>
          <div className={formAvailable !== 2 ? 'hide' : ''}>
            <ContactForm setFormAvailable={setFormAvailable} isFirstSelected={isFirstSelected} isSecondSelected={isSecondSelected} isThirdSelected={isThirdSelected} />
          </div>
          <div className={formAvailable !== 3 ? 'hide' : ''}>
            <ContactSuccess />
          </div>
        </Col>
      </Row>
    </div>
  )
}
