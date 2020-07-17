import React from 'react'

import SmileIcon2 from '../../assets/smileIcon2.svg'
import './contactSuccessStyle.css'

export default function ContactSuccess () {
  return (
    <>
      <div className='contactSuccess'>
        <div className='divText'>
          <text>Contato enviado com sucesso!</text>
        </div>
        <div className='cardContact'>
          <div className='cardContactHeader'>
            <text>Agradecemos o interesse! Iremos entrar em contato pelo e-mail e/ou telefone preenchido assim que possível.</text>
            <img src={SmileIcon2} />
          </div>
        </div>
      </div>
    </>
  )
}
