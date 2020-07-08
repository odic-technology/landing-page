import React, { useState } from 'react'
import OdicHeader from "../../components/OdicHeader";
import { Carousel, Row, Col, Layout, Menu, Tabs } from 'antd';
import './about-style.css'

const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;


export default function About() {



    return (
        <Layout className="layout">
            <Content>
                <Row className="back">
                    <Col span={12}>
                        <div className="left-col">
                            <h1 className="title2">Sobre</h1>
                            <h4 className="sub-title2">História</h4>
                            <h4 className="sub-title2">Equipe</h4>
                            <h4 className="sub-title2">Metodologia</h4>
                            <h4 className="sub-title2">Nosso foco</h4>
                        </div>
                    </Col>
                    <Col span={12}>
                    <OdicHeader />
                        <div >
                            <Carousel autoplay>
                                <div>
                                    <p color='white'>
                                        A empresa foi fundada em 2019 por um grupo de amigos de diferentes áreas do conhecimento: de Ciências Humanas a Ciências Naturais e  Computação. O único interesse em comum entre todos, era, como facilitar a vida das pessoas próximas de nossos convívios.
                                        No início, a ideia era de apenas desenvolver algumas estratégias de melhoria de atividades do cotidiano; nós queríamos aproximar as pessoas, fazer com que elas interagissem entre si e pudessem ajudar umas às outras da melhor maneira possível.
                                        Após algum tempo, percebemos que estávamos tendo bons resultados e queríamos ampliar o nosso trabalho para públicos maiores, então descobrimos o poder que tínhamos em nossas mãos: a tecnologia. Começamos estudando bastante, aplicando os conhecimentos de programação e design adquiridos no dia-a-dia e nossa paixão foi aumentando cada vez mais até o ponto onde percebemos como poderíamos mudar a vida das pessoas com essa ferramenta extremamente poderosa.
                                        Desde então, a Odic vem assumindo protagonismo ao ajudar as pessoas a colocarem suas ideias em prática e assim, impactando ainda mais na vida de um público cada vez maior!
                            </p>
                                </div>
                                <div>
                                    <p>
                                        Posso lhe contar um segredo?</p>
                                    <br />
                                    <p>
                                        Somos um time multidisciplinar, de jovens extremamente engajados e apaixonados pelo que fazemos.  Isto, faz toda a diferença para que todos os projetos desenvolvidos por nós, passem necessariamente pelas soluções mais criativas e extraordinárias para acertarmos em cheio na melhor experiência para seu usuário/cliente final.
                            </p>
                                </div>

                                <div>

                                    <p>
                                        Você sempre por perto!</p>
                                    <br />
                                    <p>
                                        Nós trabalhamos com Sprints curtos e frequentemente validamos todo o processo com você. Desta forma, garantimos que o produto seja entregue de acordo com as suas necessidades e de seus usuários/clientes de forma ágil, eficiente e transparente.
                            </p>

                                </div>
                                <div>

                                    Trabalhamos com a imaginação!
                            <p>
                                        Nosso foco sempre será: ajudar nossos clientes a desenvolverem, da maneira mais completa, as ideias mais profundas que tiveram para criar ou recriar soluções inovadoras que irão dar aquela alavancada em seus objetivos. Desta forma, além de lhe proporcionar uma experiência incrível, iremos tornar seu negócio mais atrativo e fazer com que mais e mais pessoas saibam quem você realmente é.
                            </p>
                                    <br />
                                    <p>
                                        Ainda não tem uma boa ideia para resolver um problema? sem problemas, nós também iremos te ajudar com isso!
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
