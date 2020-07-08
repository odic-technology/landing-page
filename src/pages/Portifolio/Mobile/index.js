import React, { useState } from 'react'
import OdicHeader from "../../../components/OdicHeader";
import { Carousel, Row, Col, Layout, Tabs } from 'antd';
import { Link } from 'react-router-dom';


import ArrowBack from '../../../assets/back-arrow.svg'
import Matchfy from '../../../assets/banner-matchfy.png'
import Museu from '../../../assets/banner-museu.png'

const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

export default function Mobile() {
    return (
        <Layout className="layout">
            <Content>
                <Row className='back'>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <OdicHeader />
                            </Col>
                        </Row>
                        <Row>
                            <div className="left-col">
                                <img src={ArrowBack} alt="back arrow" />
                                <h1 className="title3">Aplicativos Mobile</h1>
                            </div>
                        </Row>
                        <Row justify='center'>
                            <Col>
                                <img src={Matchfy} alt="card" />
                            </Col>
                            
                        </Row>
                        <Row justify='center'>
                            <Col>
                                <img src={Museu} alt="card" />
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout >
    )
}

