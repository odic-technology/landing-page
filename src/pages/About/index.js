import React, { useState } from 'react'
import OdicHeader from '../../components/Header/OdicHeader'
import './about-style.css'

export default function About () {
  const [textSelecioned, setTextSelecioned] = useState(1)

  return (
    <div className='about'>
      <OdicHeader pageSelected='Sobre' />
      <div className='aboutContent'>
        <div className='leftCol'>
          <text>Sobre</text>

          <button onClick={() => setTextSelecioned(1)}>
              História
            <div className={textSelecioned === 1 ? 'buttonBorder' : ''} />
          </button>

          <button onClick={() => setTextSelecioned(2)}>
              Equipe
            <div className={textSelecioned === 2 ? 'buttonBorder' : ''} />
          </button>

          <button onClick={() => setTextSelecioned(3)}>
              Metodologia
            <div className={textSelecioned === 3 ? 'buttonBorder' : ''} />
          </button>

          <button onClick={() => setTextSelecioned(4)}>
              Nosso foco
            <div className={textSelecioned === 4 ? 'buttonBorder' : ''} />
          </button>
        </div>
        <div className='rightCol'>
          <div className={textSelecioned !== 1 ? 'hide' : ''}>
            <text className='aboutFirstText'>A empresa foi fundada em 2019 por um grupo de amigos de diferentes áreas do conhecimento: de Ciências Humanas a Ciências Naturais e Computação. O único interesse em comum entre todos, era, como facilitar a vida das pessoas próximas de nossos convívios.</text>
            <text className='aboutFirstText'>No início, a ideia era de apenas desenvolver algumas estratégias de melhoria de atividades do cotidiano; nós queríamos aproximar as pessoas, fazer com que elas interagissem entre si e pudessem ajudar umas às outras da melhor maneira possível.</text>
            <text className='aboutFirstText'>Após algum tempo, percebemos que estávamos tendo bons resultados e queríamos ampliar o nosso trabalho para públicos maiores, então descobrimos o poder que tínhamos em nossas mãos: a tecnologia. Começamos estudando bastante, aplicando os conhecimentos de programação e design adquiridos no dia-a-dia e nossa paixão foi aumentando cada vez mais até o ponto onde percebemos como poderíamos mudar a vida das pessoas com essa ferramenta extremamente poderosa.</text>
            <text className='aboutFirstText'>Desde então, a Odic vem assumindo protagonismo ao ajudar as pessoas a colocarem suas ideias em prática e assim, impactando ainda mais na vida de um público cada vez maior!</text>
          </div>
          <div className={textSelecioned !== 2 ? 'hide' : ''}>
            <text className='textBold'>Posso lhe contar um segredo?</text>
            <text>Somos um time multidisciplinar, de jovens extremamente engajados e apaixonados pelo que fazemos. Isto, faz toda a diferença para que todos os projetos desenvolvidos por nós, passem necessariamente pelas soluções mais criativas e extraordinárias para acertarmos em cheio na melhor experiência para seu usuário/cliente final.</text>
          </div>
          <div className={textSelecioned !== 3 ? 'hide' : ''}>
            <text className='textBold'>Você sempre por perto!</text>
            <text>Nós trabalhamos com Sprints curtos e frequentemente validamos todo o processo com você. Desta forma, garantimos que o produto seja entregue de acordo com as suas necessidades e de seus usuários/clientes de forma ágil, eficiente e transparente.</text>
          </div>
          <div className={textSelecioned !== 4 ? 'hide' : ''}>
            <text className='textBold'>Trabalhamos com a imaginação!</text>
            <text>Nosso foco sempre será: ajudar nossos clientes a desenvolverem, da maneira mais completa, as ideias mais profundas que tiveram para criar ou recriar soluções inovadoras que irão dar aquela alavancada em seus objetivos. Desta forma, além de lhe proporcionar uma experiência incrível, iremos tornar seu negócio mais atrativo e fazer com que mais e mais pessoas saibam quem você realmente é. </text>
            <text>Ainda não tem uma boa ideia para resolver um problema? sem problemas, nós também iremos te ajudar com isso!</text>
          </div>
        </div>
      </div>
    </div>
  )
}
