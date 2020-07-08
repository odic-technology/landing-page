import OdicHeader from '../../components/OdicHeader'

import React from 'react';
import Banner from '../../assets/banner.png'
import 'antd/dist/antd.css'
import { Carousel, Row, Col, Layout, Menu, Tabs } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <>
      <Row className="back">
        <Col span={12}>
          <img src={Banner} className="banner" />
        </Col>
        <Col span={12} className="right-col">
          <OdicHeader />
          <Row align="middle" className="back">
            <Col>
              <h1 className="title">Somos a empresa digital preparada para te acompanhar à 4ª Revolução Industrial.</h1>
              <hr className="line" />
              <p className="sub-title">Criamos soluções inovadoras para apps, sites e designs.</p>       
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App
