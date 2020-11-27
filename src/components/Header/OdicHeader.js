import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import './header-style.css'

import MenuIcon from '../../assets/menuIcon.svg'
import CloseMenuIcon from '../../assets/closeMenuIcon.svg'
import OdicLogo from '../../assets/odicLogo.svg'

export default function Navbar ({ hasBackButton, pageSelected }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScroll, setlastScroll] = useState(0)

  const [relMouseX, setRelMouseX] = useState(0)
  const [relMouseY, setRelMouseY] = useState(0)
  const [isButtonHover, setIsButtonHover] = useState(false)
  const buttonRef = useRef()

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
    if (!hasBackButton || window.innerWidth < 600) {
      return (
        <div className='headerLogoLeftSide'>
          <img alt='' src={OdicLogo} className='headerOdicLogo' />
          <p className='separator'>{pageSelected ? '__' : ''}</p>
          <p>{pageSelected}</p>
        </div>
      )
    }
  }

  function startButtonAnimation (e) {
    if (e.changedTouches !== undefined || window.innerWidth > 600) {
      var mouseX
      var mouseY
      if (window.innerWidth < 600) {
        mouseX = e.changedTouches[0].pageX
        mouseY = e.changedTouches[0].pageY
      } else {
        mouseX = e.pageX
        mouseY = e.pageY
      }

      setRelMouseX(mouseX - buttonRef.current.offsetLeft)
      setRelMouseY(mouseY - buttonRef.current.offsetTop)
      setIsButtonHover(true)
    }
  }

  function removeButtonAnimation (e) {
    if (e.changedTouches !== undefined || window.innerWidth > 600) {
      var mouseX
      var mouseY
      if (window.innerWidth < 600) {
        mouseX = e.changedTouches[0].pageX
        mouseY = e.changedTouches[0].pageY
      } else {
        mouseX = e.pageX
        mouseY = e.pageY
      }

      setRelMouseX(mouseX - buttonRef.current.offsetLeft)
      setRelMouseY(mouseY - buttonRef.current.offsetTop)
      setIsButtonHover(false)
    }
  }

  return (
    <>
      <div className={isOpen ? 'openBackground headerBackground' : 'headerBackground'} onClick={() => setIsOpen(false)} />
      <div className={isVisible ? 'header' : 'hideHeader header'}>
        <div className='topHeader'>
          {renderHeaderLeftSide()}
          <div className={isOpen ? 'open' : ''} id='menu'>
            <div className='closeMenuIcon'>
              <img alt='' src={CloseMenuIcon} onClick={() => setIsOpen(false)} />
            </div>
            <Link onClick={() => setIsOpen(false)} to='/'><p>Início</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/about'><p className={pageSelected === 'Sobre' ? 'showMenuBorder' : ''}>Sobre</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/portfolio'><p className={pageSelected === 'Portfólio' ? 'showMenuBorder' : ''}>Portfólio</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/services'><p className={pageSelected === 'Serviços' ? 'showMenuBorder' : ''}>Serviços</p></Link>
            <Link onClick={() => setIsOpen(false)} to='/contact'>
              <div
                ref={buttonRef} className={isButtonHover ? 'filledBorder menuButtonContact' : 'menuButtonContact'}
                onMouseEnter={startButtonAnimation} onMouseLeave={removeButtonAnimation}
                onTouchStart={startButtonAnimation} onTouchEnd={removeButtonAnimation}
              >
                Solicitar contato
                <div style={{ left: relMouseX, top: relMouseY }} className={isButtonHover ? 'filled' : ''} />
              </div>
            </Link>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='menuButton basic'>
            <img src={MenuIcon} alt='icon' />
          </div>
        </div>
      </div>
    </>
  )
}
