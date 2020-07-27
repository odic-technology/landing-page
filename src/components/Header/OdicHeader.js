import React, { useState, useEffect } from 'react'
import './header-style.css'

import MenuIcon from '../../assets/menuIcon.svg'
import CloseMenuIcon from '../../assets/closeMenuIcon.svg'
import { Link } from 'react-router-dom'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [pageSelected, setPageSelected] = useState('home')

  useEffect(() => {
    if (window.location.href.includes('about')) {
      setPageSelected('about')
    } else if (window.location.href.includes('portfolio')) {
      setPageSelected('portfolio')
    } else if (window.location.href.includes('services')) {
      setPageSelected('services')
    } else {
      setPageSelected('home')
    }
  })

  return (
    <div className='header'>
      <div className={isOpen ? 'open' : ''} id='menu'>
        <div className='closeMenuIcon'>
          <img alt='' src={CloseMenuIcon} onClick={() => setIsOpen(false)} />
        </div>
        <Link to='/' className={pageSelected === 'home' ? 'showMenuBorder' : ''}><p className='basic'>Início</p></Link>
        <Link to='/about' className={pageSelected === 'about' ? 'showMenuBorder' : ''}><p className='basic'>Sobre</p></Link>
        <Link to='/portfolio' className={pageSelected === 'portfolio' ? 'showMenuBorder' : ''}><p className='basic'>Portifólio</p></Link>
        <Link to='/services' className={pageSelected === 'services' ? 'showMenuBorder' : ''}><p className='basic'>Serviços</p></Link>
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
  )
}
