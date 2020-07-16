import React from 'react'

import RightArrow from '../../assets/rightArrow.svg'
import LeftArrow from '../../assets/leftArrow.svg'

import './contactFormStyle.css'

export default function ContactForm () {
  return (
    <>
      <div className='contactForm'>
        <div className='divText'>
          <text>É fácil e rápido, basta preencher os</text>
          <text>campos e clicar em “enviar”!</text>
        </div>
        <div className='cardContact'>
          <div className='cardContactHeader'>
            <div>
              <img src={LeftArrow} />
              <text>Preencha os campos abaixo:</text>
              <img />
            </div>
          </div>
          <div className='cardContactContent'>
            <input placeholder='Nome completo' />
            <input placeholder='E-mail' />
            <input placeholder='Telefone para contato' />
          </div>
        </div>
        <div className='bottomRightColumn'>
          <div>
            <button>
              <img />
              Enviar
              <img src={RightArrow} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
