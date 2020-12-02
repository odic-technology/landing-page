import React, { useState } from 'react'
import OdicHeader from '../../components/Header/OdicHeader'
import './about-style.css'

import History from '../../assets/about/aboutHistory.svg'
import Team from '../../assets/about/aboutTeam.svg'
import Methodology from '../../assets/about/aboutMethodology.svg'
import Focus from '../../assets/about/aboutFocus.svg'

export default function About () {
  const [textSelecioned, setTextSelecioned] = useState(1)

  return (
    <div className='about'>
      <OdicHeader pageSelected='Sobre' />
      <div className='aboutHeader'>
        <button onClick={() => setTextSelecioned(1)}>
          <p className='textTitle'>História</p>
          <div className={textSelecioned === 1 ? 'buttonBorder' : ''} />
        </button>

        <button onClick={() => setTextSelecioned(2)}>
          <p className='textTitle'>Equipe</p>
          <div className={textSelecioned === 2 ? 'buttonBorder' : ''} />
        </button>

        <button onClick={() => setTextSelecioned(3)}>
          <p className='textTitle'>Metodologia</p>
          <div className={textSelecioned === 3 ? 'buttonBorder' : ''} />
        </button>

        <button onClick={() => setTextSelecioned(4)}>
          <p className='textTitle'>Nosso foco</p>
          <div className={textSelecioned === 4 ? 'buttonBorder' : ''} />
        </button>
      </div>
      <div className='aboutContent'>
        <div className={textSelecioned !== 1 ? 'hide content' : 'content'}>
          <div className='flexDirection'>
            <p>Um ideal inspirador</p>
            <p>A empresa foi fundada em 2019 por um grupo de amigos de diferentes áreas do conhecimento, desde ciências da computação, naturais e até das humanas. Um grande interesse em comun entre todos do grupo, era, de encontrar maneiras diferentes para facilitar a vida das pessoas. </p>
            <p>No início, a ideia era de apenas desenvolver algumas estratégias de melhoria das atividades do dia-a-dia; a ideia era fazer com que as pessoas interagissem entre si e pudessem ajudar umas às outras da melhor maneira possível.</p>
            <p>Após algum tempo, percebemos que estávamos colhendo ótimos resultados. A necessidade de ampliar o trabalho para públicos maiores foi algo natural, então descobrimos as infinitas possibilidades de impacto permitidas pelo uso da tecnologia da informação. Após muito estudo, a aplicação dos conhecimentos de programação e design permitiram que a paixão pelo trabalho fosse aumentando cada vez mais, ao ponto onde a maior certeza era de que não haveria mais volta, aquilo seria apenas o começo.</p>
            <p>Desde então, a Odic vem assumindo protagonismo ao ajudar seus clientes a encontrarem soluções digitais para suas ideias e assim, impactar cada vez mais na vida de um público ainda maior e mais diversificado!</p>
          </div>
          <img src={History} alt='History' />
        </div>
        <div className={textSelecioned !== 2 ? 'hide content' : 'content'}>
          <text className='textBold'>Posso lhe contar um segredo?</text>
          <text>Somos um time multidisciplinar, de jovens extremamente engajados e apaixonados pelo que fazemos. Isto, faz toda a diferença para que todos os projetos desenvolvidos por nós, passem necessariamente pelas soluções mais criativas e extraordinárias para acertarmos em cheio na melhor experiência para seu usuário/cliente final.</text>
        </div>
        <div className={textSelecioned !== 3 ? 'hide content' : 'content'}>
          <text className='textBold'>Você sempre por perto!</text>
          <text>Nós trabalhamos com Sprints curtos e frequentemente validamos todo o processo com você. Desta forma, garantimos que o produto seja entregue de acordo com as suas necessidades e de seus usuários/clientes de forma ágil, eficiente e transparente.</text>
        </div>
        <div className={textSelecioned !== 4 ? 'hide content' : 'content'}>
          <text className='textBold'>Trabalhamos com a imaginação!</text>
          <text>Nosso foco sempre será: ajudar nossos clientes a desenvolverem, da maneira mais completa, as ideias mais profundas que tiveram para criar ou recriar soluções inovadoras que irão dar aquela alavancada em seus objetivos. Desta forma, além de lhe proporcionar uma experiência incrível, iremos tornar seu negócio mais atrativo e fazer com que mais e mais pessoas saibam quem você realmente é. </text>
          <text>Ainda não tem uma boa ideia para resolver um problema? sem problemas, nós também iremos te ajudar com isso!</text>
        </div>
      </div>
    </div>
  )
}
