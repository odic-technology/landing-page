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

  function putBorderError (errorArray) {
    errorArray.forEach(element => {
      document.getElementById(element).className = 'inputInvalid'
    })
  }

  function cleanAllInvalidFields () {
    document.getElementById('inputName').className = ''
    document.getElementById('inputEmail').className = ''
    document.getElementById('inputPhone').className = ''
  }

  function validateFields () {
    cleanAllInvalidFields()
    var errorArray = []
    var isEmailValid = EmailValidator.validate(email)
    var phoneAux = phone.replaceAll('_', '').replaceAll('(', '').replaceAll(')', '').replaceAll('-', '')

    if (!isEmailValid) {
      errorArray.push('inputEmail')
    }
    if (name.length <= 3) {
      errorArray.push('inputName')
    }
    if (phoneAux.length <= 10) {
      errorArray.push('inputPhone')
    }

    if (errorArray.length === 0) {
      return true
    } else {
      putBorderError(errorArray)
      return false
    }
  }

  async function sendInformations () {
    var isFieldsValid = validateFields()
    if (isFieldsValid) {
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
            <input id='inputName' value={name} onChange={(event) => { setName(event.target.value) }} placeholder='Nome completo' />
            <input id='inputEmail' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
            <InputMask id='inputPhone' placeholder='Telefone para contato' mask='(99) 99999-9999' onChange={(event) => setPhone(event.target.value)} />
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
