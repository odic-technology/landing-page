import React, { useState } from 'react'
import { Menu } from 'antd'
import './header-style.css'

import MenuIcon from '../assets/menuIcon.svg'
import { Link } from 'react-router-dom'

const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundColor: 'transparent',
  border: 0,
  color: '#FFFFFF',
  height: 45
}

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='header'>
      <div className={isOpen ? 'open' : ''} id='menuHorizontal'>
        <Menu mode='horizontal' className='basic' style={centerStyle}>
          <Menu.Item key='1'>
            <Link to='/'><p className='basic'>Home</p></Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/about'><p className='basic'>Sobre</p></Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link to='/portfolio'><p className='basic'>Portifólio</p></Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/services'><p className='basic'>Serviços</p></Link>
          </Menu.Item>
          <Link to='/contact'>
            <button className='contact'>
              <text>Contato</text>
            </button>
          </Link>
        </Menu>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className='menuButton basic'>
        <img src={MenuIcon} />
        <text className='menuText'>Menu</text>
      </div>
    </div>
  )
}
