import React, { useState } from 'react'
import OdicHeader from '../../components/Header/OdicHeader'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import CheckIcon from '../../assets/checkIcon.svg'
import Smile from '../../assets/smileIcon.svg'

import './contactStyle.css'

export default function Contact () {
  const [typeSelected, setTypeSelected] = useState(1)

  const [isFirstSelected, setIsFirstSelected] = useState(false)
  const [isSecondSelected, setIsSecondSelected] = useState(false)
  const [isThirdSelected, setIsThirdSelected] = useState(false)

  const [quatitySelected, setQuatitySelected] = useState(0)

  function selectItem () {
    if (typeSelected === 1) {
      setIsFirstSelected(!isFirstSelected)
    } else if (typeSelected === 2) {
      setIsSecondSelected(!isSecondSelected)
    } else if (typeSelected === 3) {
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
          <div className='divText'>
            <text>Gostaria de criar algo conosco?</text>
            <text><text>É muito simples</text>, basta selecionar as</text>
            <text>opções abaixo:</text>
          </div>
          <div className='cardContact'>
            <div className='cardContactHeader'>
              <div className='cardContactType'>
                <text onClick={() => setTypeSelected(1)} className={typeSelected === 1 ? 'headerSelected' : ''}>Web</text>
                <div className={typeSelected === 1 ? 'headerSelectedTriangle' : ''} />
                <img src={CheckIcon} className={isFirstSelected ? 'headerSelectedCheck' : ''} />
              </div>
              <div className='cardContactType'>
                <text onClick={() => setTypeSelected(2)} className={typeSelected === 2 ? 'headerSelected' : ''}>Mobile</text>
                <div className={typeSelected === 2 ? 'headerSelectedTriangle' : ''} />
                <img src={CheckIcon} className={isSecondSelected ? 'headerSelectedCheck' : ''} />
              </div>
              <div className='cardContactType'>
                <text onClick={() => setTypeSelected(3)} className={typeSelected === 3 ? 'headerSelected' : ''}>Design</text>
                <div className={typeSelected === 3 ? 'headerSelectedTriangle' : ''} />
                <img src={CheckIcon} className={isThirdSelected ? 'headerSelectedCheck' : ''} />
              </div>
            </div>
            <div className='cardContactContent'>
              <div>
                <text className={typeSelected === 1 ? 'textSelected' : ''}>Está precisando de um site moderno, interativo e que te ajude a escalar ou consolidar seus negócios? Nós podemos te ajudar!</text>
                <text className={typeSelected === 2 ? 'textSelected' : ''}>Está procurando uma maneira de transformar sua ideia em um aplicativo mobile? Você está no lugar certo!</text>
                <text className={typeSelected === 3 ? 'textSelected' : ''}>Gostaria de criar uma identidade visual para impactar diretamente no sucesso de seus negócios? você veio ao lugar certo!</text>
              </div>
              <div className='cardContactButton'>
                <button
                  onClick={() => { selectItem() }}
                  className={
                    typeSelected === 1 && isFirstSelected ? 'typeChecked'
                      : typeSelected === 2 && isSecondSelected ? 'typeChecked'
                        : typeSelected === 3 && isThirdSelected ? 'typeChecked'
                          : ''
                  }
                >
                  {
                    typeSelected === 1 && isFirstSelected ? 'Desfazer'
                      : typeSelected === 2 && isSecondSelected ? 'Desfazer'
                        : typeSelected === 3 && isThirdSelected ? 'Desfazer'
                          : 'Tenho interesse!'
                  }
                </button>
              </div>
            </div>
            <div>
              <text>
                {

                }
              </text>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
