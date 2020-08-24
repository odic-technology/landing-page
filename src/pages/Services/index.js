import React, { useState } from 'react'
import OdicHeader from '../../components/Header/OdicHeader'
import './servicesStyle.css'

import RightArrow from '../../assets/rightArrow.svg'
import { Link } from 'react-router-dom'

export default function About () {
  const [textSelecioned, setTextSelecioned] = useState(1)

  return (
    <div className='services'>
      <OdicHeader pageSelected='Serviços' />
      <div className='servicesContent'>
        <div className='leftCol'>
          <text>Serviços</text>
          <div className='itens'>
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
          </div>

        </div>
        <div className='rightCol'>
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
                <img src={RightArrow} alt='arrow' />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
