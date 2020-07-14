import React, { useState } from 'react'
import OdicHeader from '../../components/Header/OdicHeader'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import Mobile from '../../assets/mobileIcon.svg'
import Web from '../../assets/webIcon.svg'
import Design from '../../assets/designIcon.svg'
import Smile from '../../assets/smileIcon.svg'

import './contactStyle.css'

export default function Contact () {
  const [typeSelected, setTypeSelected] = useState(1)

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
          <div className='divText'>
            <text>Gostaria de criar algo conosco?</text>
            <text><text>É muito simples</text>, basta selecionar as</text>
            <text>opções abaixo:</text>
          </div>
          <div className='cardContact'>
            <div className='cardContactHeader'>
              <text onClick={() => setTypeSelected(1)} className={typeSelected === 1 ? 'headerSelected' : ''}>Web</text>
              <text onClick={() => setTypeSelected(2)} className={typeSelected === 2 ? 'headerSelected' : ''}>Mobile</text>
              <text onClick={() => setTypeSelected(3)} className={typeSelected === 3 ? 'headerSelected' : ''}>Design</text>
            </div>
            <div className='cardContactContent'>
              <div>
                <text className={typeSelected === 1 ? 'textSelected' : ''}>Está precisando de um site moderno, interativo e que te ajude a escalar ou consolidar seus negócios? Nós podemos te ajudar!</text>
                <text className={typeSelected === 2 ? 'textSelected' : ''}>Está procurando uma maneira de transformar sua ideia em um aplicativo mobile? Você está no lugar certo!</text>
                <text className={typeSelected === 3 ? 'textSelected' : ''}>Gostaria de criar uma identidade visual para impactar diretamente no sucesso de seus negócios? você veio ao lugar certo!</text>
              </div>
              <div className='cardContactButton'>
                <button>Tenho interesse!</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
