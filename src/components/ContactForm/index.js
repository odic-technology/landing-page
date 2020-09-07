import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import * as EmailValidator from 'email-validator'

import RightArrow from '../../assets/rightArrow.svg'
import LeftArrow from '../../assets/leftArrow.svg'
import { postApi } from '../../api/landingPageFetch'

import './contactFormStyle.css'

export default function ContactForm ({ setFormAvailable, isFirstSelected, isSecondSelected, isThirdSelected }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function validateEmail (text) {
    var isValid = EmailValidator.validate(text)
    setEmail(text)
    console.log(isValid)
    // TODO create a message to user
  }

  async function sendInformations () {
    const information = {
      name: name,
      email: email,
      phone: phone,
      web: isFirstSelected.toString(),
      mobile: isSecondSelected.toString(),
      design: isThirdSelected.toString()
    }

    await postApi('/', information)
    setFormAvailable(3)
    setTimeout(() => {
      setFormAvailable(1)
    }, 8000)
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
              <img src={LeftArrow} onClick={() => setFormAvailable(1)} alt='Back' />
              <text>Preencha os campos abaixo:</text>
              <img alt='' />
            </div>
          </div>
          <div className='cardContactContent'>
            <input value={name} onChange={(event) => { setName(event.target.value) }} placeholder='Nome completo' />
            <input placeholder='E-mail' onChange={(event) => validateEmail(event.target.value)} />
            <InputMask placeholder='Telefone para contato' mask='(99) 99999-9999' onChange={(event) => setPhone(event.target.value)} />
          </div>
        </div>
        <div className='bottomRightColumn'>
          <div>
            <button onClick={() => sendInformations()}>
              <img alt='' />
              Enviar
              <img src={RightArrow} alt='' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
