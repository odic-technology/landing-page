import React, { useState } from 'react'
import { Carousel, Row, Col, Layout, Menu, Tabs, Button } from 'antd';
import './header-style.css'


import {
    Link
} from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    border: 0,
    color: '#FFFFFF',
  }

export default function Navbar() {
    return (
            <Menu mode="horizontal" style={centerStyle}>
                <Menu.Item key="1">
                    <Link to="/"><p className='basic'>Home</p></Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about"><p className='basic'>Sobre</p></Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Link to="/services"><p className='basic'>Serviços</p></Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/portfolio"><p className='basic'>Portifólio</p></Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/contact">
                        <Button type="primary" shape="round" size={30} className='contact'>
                            Contato
                        </Button>
                    </Link>
                </Menu.Item>
            </Menu>
    )
}
