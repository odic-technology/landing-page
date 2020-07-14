import React, { useState } from 'react'
import OdicHeader from '../../components/Header/OdicHeader'
import { Row, Col } from 'antd'
import './servicesStyle.css'

import RightArrow from '../../assets/rightArrow.svg'
import { Link } from 'react-router-dom'

export default function About () {
  const [textSelecioned, setTextSelecioned] = useState(1)

  return (
    <div className='services'>
      <OdicHeader />
      <Row>
        <Col span={11} className='leftCol'>
          <text>Serviços</text>

          <button onClick={() => setTextSelecioned(1)}>
              Aplicativos Mobile
            <div className={textSelecioned === 1 ? 'buttonBorder' : ''} />
          </button>

          <button onClick={() => setTextSelecioned(2)}>
              Desenvolvimento Web
            <div className={textSelecioned === 2 ? 'buttonBorder' : ''} />
          </button>

          <button onClick={() => setTextSelecioned(3)}>
              Criação de Design
            <div className={textSelecioned === 3 ? 'buttonBorder' : ''} />
          </button>

        </Col>
        <Col span={13} className='rightCol'>
          <div className={textSelecioned !== 1 ? 'hide' : ''}>
            <text className='aboutFirstText'>Nós criamos aplicativos mobile com foco em funcionalidade, estética e interatividade. Utilizamos as tecnologias mais modernas que proporcionam a melhor experiência ao usuário/cliente final!</text>
          </div>
          <div className={textSelecioned !== 2 ? 'hide' : ''}>
            <text>Nós desenvolvemos sites modernos, eficientes e bem interativos para você e seu usuário/cliente!</text>
          </div>
          <div className={textSelecioned !== 3 ? 'hide' : ''}>
            <text>Nós criamos ou atualizamos a identidade visual da sua ideia para qualquer formato digital ou impresso de sua escolha, usando consistência, criatividade e toque de excepcionalidade.</text>
          </div>
          <Link to='/contact'>
            <div className='divButton'>
              <button>
              Entrar em contato
                <img src={RightArrow} />
              </button>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  )
}
