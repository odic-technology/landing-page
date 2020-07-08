import React, { useState } from 'react'
import OdicHeader from "../../../components/OdicHeader";
import { Carousel, Row, Col, Layout, Tabs } from 'antd';

import ArrowBack from '../../../assets/back-arrow.svg'
import Matchfy from '../../../assets/card-matchfy.png'

import { Link } from 'react-router-dom';


const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;
export default function Web() {



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
                                <h1 className="title3">Páginas Web</h1>
                            </div>
                        </Row>
                        <Row justify="center" align='center'>
                            <Col>
                                <p className="text-block">Nosso primeiro projeto web pode ser visto ao clicar no card ao lado, sinta-se a vontade!Além disto, vale lembrar que este site que você está usando neste exato momento também foi feito por nós :)</p>
                            </Col>
                            <Col>
                            <a target="_blank" rel="noopener noreferrer" href='https://matchfyapp.com'>
                                <img src={Matchfy} alt="card" />
                            </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout >
    )
}

