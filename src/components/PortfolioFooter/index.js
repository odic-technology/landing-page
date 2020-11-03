import React from 'react'
import './portfolioFooterStyle.css'

import OdicLogo from '../../assets/odicLogo.svg'
import EmailIcon from '../../assets/emailIcon.svg'
import CellphoneIcon from '../../assets/cellphoneIcon.svg'

export default function PortfolioFooter () {
  return (
    <div className='portfolioFooter'>
      <img alt='Odic Logo' src={OdicLogo} />
      <div className='odicInfo'>
        <div>
          <img alt='Email Icon' src={EmailIcon} className='icon' />
          <text>contato@odic.com.br</text>
        </div>
        <div>
          <img alt='Cellphone Icon' src={CellphoneIcon} className='icon' />
          <text>+55 (19) 99653-5534</text>
        </div>
      </div>
    </div>
  )
}
