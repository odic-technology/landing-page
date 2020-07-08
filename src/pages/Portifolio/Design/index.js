import React, { useState } from 'react'
import OdicHeader from "../../../components/OdicHeader";
import { Carousel, Row, Col, Layout, Tabs } from 'antd';
import { Link } from 'react-router-dom';


import ArrowBack from '../../../assets/back-arrow.svg'
import Matchfy1 from '../../../assets/slide-1.png'
import Matchfy2 from '../../../assets/slide-2.png'
import Matchfy3 from '../../../assets/slide-3.png'
import Turbo1 from '../../../assets/slide-4.png'
import Turbo2 from '../../../assets/slide-5.png'

const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

export default function Design() {
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
                                <img src={Matchfy1} alt="card" />
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Col>
                                <img src={Matchfy2} alt="card" />
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Col>
                                <img src={Matchfy3} alt="card" />
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Col>
                                <img src={Turbo1} alt="card" />
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Col>
                                <img src={Turbo2} alt="card" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout >
    )
}

