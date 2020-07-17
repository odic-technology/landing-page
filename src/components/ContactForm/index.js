import React from 'react'
import InputMask from 'react-input-mask'
import * as EmailValidator from 'email-validator'

import RightArrow from '../../assets/rightArrow.svg'
import LeftArrow from '../../assets/leftArrow.svg'

import './contactFormStyle.css'

export default function ContactForm ({ setFormAvailable, name, setName, email, setEmail, phone, setPhone }) {
  function validateEmail (text) {
    var isValid = EmailValidator.validate(text)
    console.log(isValid)
  }

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
              <img src={LeftArrow} onClick={() => setFormAvailable(1)} />
              <text>Preencha os campos abaixo:</text>
              <img />
            </div>
          </div>
          <div className='cardContactContent'>
            <input placeholder='Nome completo' />
            <input placeholder='E-mail' onChange={(event) => validateEmail(event.target.value)} />
            <InputMask placeholder='Telefone para contato' mask='(99) 99999-9999' />
          </div>
        </div>
        <div className='bottomRightColumn'>
          <div>
            <button onClick={() => setFormAvailable(3)}>
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
