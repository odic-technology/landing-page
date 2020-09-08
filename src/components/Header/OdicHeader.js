import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './header-style.css'

import MenuIcon from '../../assets/menuIcon.svg'
import CloseMenuIcon from '../../assets/closeMenuIcon.svg'
import OdicLogo from '../../assets/odicLogo.svg'
import ArrowBack from '../../assets/back-arrow.svg'
import ArrowBackMobile from '../../assets/backArrowMobile.svg'

export default function Navbar ({ isHalfHeader, hasBackButton, title, pageSelected, hasBackButtonMobile }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScroll, setlastScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      var scroll = window.scrollY
      if (lastScroll < scroll) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setlastScroll(scroll)
    })
  })

  function renderHeaderLeftSide () {
    if (hasBackButton && window.innerWidth > 600) {
      return (
        <div className='headerLeftSide'>
          <Link to='/portfolio'>
            <img src={ArrowBack} alt='arrow' />
          </Link>
          <text>{title}</text>
        </div>
      )
    } else {
      return (
        <div className='headerLogoLeftSide'>
          <img alt='' src={OdicLogo} className='headerOdicLogo' />
          <text className='separator'>__</text>
          <text>{pageSelected}</text>
        </div>
      )
    }
  }

  function renderPortfolioHeaderMobile () {
    return (
      <div className='mobilePortfolioHeader'>
        <Link to='/portfolio'>
          <img src={ArrowBackMobile} alt='arrow' />
        </Link>
        <text>{title}</text>
      </div>
    )
  }

  return (
    <>
      <div className={isOpen ? 'openBackground headerBackground' : 'headerBackground'} onClick={() => setIsOpen(false)} />
      <div className={isVisible ? isHalfHeader ? 'halfHeader header' : 'header' : 'hideHeader header'}>
        <div className='topHeader'>
          {renderHeaderLeftSide()}
          <div className={isOpen ? 'open' : ''} id='menu'>
            <div className='closeMenuIcon'>
              <img alt='' src={CloseMenuIcon} onClick={() => setIsOpen(false)} />
            </div>
            <Link onClick={() => setIsOpen(false)} to='/'><p className={pageSelected === 'Início' ? 'showMenuBorder basic' : 'basic'}>Início</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/about'><p className={pageSelected === 'Sobre' ? 'showMenuBorder basic' : 'basic'}>Sobre</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/portfolio'><p className={pageSelected === 'Portfólio' ? 'showMenuBorder basic' : 'basic'}>Portfólio</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/services'><p className={pageSelected === 'Serviços' ? 'showMenuBorder basic' : 'basic'}>Serviços</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/contact'>
              <button className='menuButtonContact'>
                <text>Contato</text>
              </button>
            </Link>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='menuButton basic'>
            <img src={MenuIcon} alt='icon' />
            <text className='menuText'>Menu</text>
          </div>
        </div>
        {hasBackButtonMobile && renderPortfolioHeaderMobile()}
      </div>
    </>
  )
}
