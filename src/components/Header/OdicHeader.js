import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './header-style.css'

import MenuIcon from '../../assets/menuIcon.svg'
import CloseMenuIcon from '../../assets/closeMenuIcon.svg'
import OdicLogo from '../../assets/odicLogo.svg'
import ArrowBack from '../../assets/back-arrow.svg'

export default function Navbar ({ isHalfHeader, hasBackButton, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const [pageSelected, setPageSelected] = useState('home')

  useEffect(() => {
    if (window.location.href.includes('about')) {
      setPageSelected('about')
    } else if (window.location.href.includes('portfolio') || window.location.href.includes('web') || window.location.href.includes('mobile') || window.location.href.includes('design')) {
      setPageSelected('portfolio')
    } else if (window.location.href.includes('services')) {
      setPageSelected('services')
    } else if (!window.location.href.includes('contact')) {
      setPageSelected('home')
    } else {
      setPageSelected('')
    }
  })

  function renderHeaderLeftSide () {
    if (hasBackButton) {
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
        <img alt='' src={OdicLogo} className='headerOdicLogo' />
      )
    }
  }

  return (
    <>
      <div className={isOpen ? 'openBackground headerBackground' : 'headerBackground'} onClick={() => setIsOpen(false)} />
      <div className={isHalfHeader ? 'halfHeader header' : 'header'}>
        {renderHeaderLeftSide()}
        <div className={isOpen ? 'open' : ''} id='menu'>
          <div className='closeMenuIcon'>
            <img alt='' src={CloseMenuIcon} onClick={() => setIsOpen(false)} />
          </div>
          <Link to='/'><p className={pageSelected === 'home' ? 'showMenuBorder basic' : 'basic'}>Início</p></Link>
          <Link to='/about'><p className={pageSelected === 'about' ? 'showMenuBorder basic' : 'basic'}>Sobre</p></Link>
          <Link to='/portfolio'><p className={pageSelected === 'portfolio' ? 'showMenuBorder basic' : 'basic'}>Portifólio</p></Link>
          <Link to='/services'><p className={pageSelected === 'services' ? 'showMenuBorder basic' : 'basic'}>Serviços</p></Link>
          <Link to='/contact'>
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
    </>
  )
}
