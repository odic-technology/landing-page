import React, { useState } from 'react'
import OdicHeader from "../../components/OdicHeader";
import { Carousel, Row, Col, Layout, Menu, Tabs } from 'antd';
const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;



export default function Services() {
    return (
        <Layout className="layout">
            <Content>
                <Row className='back'>
                    <Col span={12}>
                        <div className="left-col">
                            <h1 className="title2">Serviços</h1>
                            <h4 className="sub-title2">Aplicativos mobile</h4>
                            <h4 className="sub-title2">Desenvolvimento web</h4>
                            <h4 className="sub-title2">Criação de Design</h4>
                        </div>
                    </Col>
                    <Col span={12}>
                        <OdicHeader />
                        <div>
                            <Carousel autoplay >
                                <div>
                                    <p >
                                        Nós criamos aplicativos mobile com foco em funcionalidade, estética e  interatividade. Utilizamos as tecnologias mais modernas que proporcionam a melhor experiência ao  usuário/cliente final!
                                    </p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout >
    )
}

