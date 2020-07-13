import React, { useState } from 'react'
import OdicHeader from '../../components/OdicHeader';
import { Carousel, Row, Col, Layout, Menu, Tabs } from 'antd'

import Mobile from '../../assets/mobileIcon.svg'
import Web from '../../assets/webIcon.svg'
import Design from '../../assets/designIcon.svg'
import { Link } from 'react-router-dom'


const { TabPane } = Tabs
const { Header, Footer, Sider, Content } = Layout
export default function Contact () {
  return (
    <Layout className='layout'>
      <Content>
        <Row className='back'>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <OdicHeader />
              </Col>
            </Row>
            <Row>
              <div className='left-col'>
                <h1 className='title2'>Contato</h1>
              </div>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
