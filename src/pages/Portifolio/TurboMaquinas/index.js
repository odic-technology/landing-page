import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortfolioFooter from '../../../components/PortfolioFooter/index'
import PortfolioFont from '../../../components/PortfolioFont'

import LogoTurbo from '../../../assets/portfolio/turboMaquinas/logoTurboMaquinas.svg'
import PortfolioTurboAfter1 from '../../../assets/portfolio/turboMaquinas/portfolioTurboAfter1.png'
import PortfolioTurboAfter2 from '../../../assets/portfolio/turboMaquinas/portfolioTurboAfter2.svg'
import PortfolioTurboAfter3 from '../../../assets/portfolio/turboMaquinas/portfolioTurboAfter3.svg'
import PortfolioTurboAfter4 from '../../../assets/portfolio/turboMaquinas/portfolioTurboAfter4.svg'
import PortfolioTurboBefore1 from '../../../assets/portfolio/turboMaquinas/portfolioTurboBefore1.svg'
import PortfolioTurboBefore2 from '../../../assets/portfolio/turboMaquinas/portfolioTurboBefore2.svg'
import PortfolioTurboBefore3 from '../../../assets/portfolio/turboMaquinas/portfolioTurboBefore3.svg'

import './designStyle.css'

export default function Design () {
  return (
    <div className='portifolioDesign'>
      <OdicHeader hasBackButton hasBackButtonMobile title='Turbo Máquinas' pageSelected='Portfólio' />
      <div className='about'>
        <p>O projeto Turbo Máquinas foi um grande desafio realizado por nossa equipe. A empresa, já muito bem estabelecida no mercado, estava passando por um processo ainda maior de crescimento e visibilidade perante o mercado em que atua. Seu representante entrou em contato com um de nossos membros a fim de estudar a possibilidade da modernização completa do catálogo de seus produtos e serviços em um curto período de tempo (3 dias).</p>
        <div className='cardLogo'>
          <img alt='Turbo Maquinas' src={LogoTurbo} />
        </div>
      </div>
      <div className='goals flexDirection textBorderBottom'>
        <p className='textTitle'>Objetivos</p>
        <p>A missão era modernizar todo o design do catálogo de produtos e serviços, além de traduzí-lo inteiramente para a língua inglesa usando os dados de um catálogo obsoleto de cerca de décadas atrás que a empresa já possuía, tudo isto em um tempo recorde. </p>
      </div>
      <div className='colorPallete'>
        <div className='textPallete flexDirection textBorderBottom'>
          <p className='textTitle'>Paleta de cores</p>
          <p>Optamos por cores que remetessem à identidade visual da empresa para que, quando as pessoas estivessem lendo o folder, lembrassem do logotipo.</p>
        </div>
        <div className='color flexDirection'>
          <div className='square blue' />
          <p>#023B7E</p>
        </div>
        <div className='color flexDirection'>
          <div className='square red' />
          <p>#EF3C1F</p>
        </div>
      </div>
      <PortfolioFont />
      <div className='improvement flexAlignDirection'>
        <p className='textTitle'>Remodelação</p>
        <div className='comparison'>
          <div className='divHalf flexAlignDirection'>
            <p>Antes</p>
            <img alt='Turbo Maquinas' className='beforeImage' src={PortfolioTurboBefore1} />
          </div>
          <div className='divHalf flexAlignDirection'>
            <p>Depois</p>
            <div className='divHalfImages flexAlignDirection'>
              <img alt='Turbo Maquinas' className='afterImage1' src={PortfolioTurboAfter1} />
              <img alt='Turbo Maquinas' className='afterImage' src={PortfolioTurboAfter2} />
            </div>
          </div>
        </div>
        <div className='comparison'>
          <div className='divHalf flexAlignDirection'>
            <img alt='Turbo Maquinas' className='beforeImage' src={PortfolioTurboBefore2} />
          </div>
          <div className='divHalfCenter flexAlignDirection'>
            <div className='divHalfImages flexAlignDirection'>
              <img alt='Turbo Maquinas' className='afterImage' src={PortfolioTurboAfter3} />
            </div>
          </div>
        </div>
        <div className='comparison'>
          <div className='divHalf flexAlignDirection'>
            <img alt='Turbo Maquinas' className='beforeImage' src={PortfolioTurboBefore3} />
          </div>
          <div className='divHalfCenter flexAlignDirection'>
            <div className='divHalfImages flexAlignDirection'>
              <img alt='Turbo Maquinas' className='afterImage' src={PortfolioTurboAfter4} />
            </div>
          </div>
        </div>
      </div>
      <div className='learnings flexAlignDirection textBorderBottom'>
        <p className='textTitle'>Aprendizados</p>
        <p>Resolver o case da Turbo Máquinas agregou muito para nossa experiência! Nós conseguimos em um curto período de tempo: entender a dor do cliente, esboçar uma solução rápida que atendesse suas necessidades, validar com nosso cliente e entregar a tempo para que nosso trabalho surtisse o efeito desejado do valor que estávamos propostos a entregar. Conseguir desafiar diferentes prazos é algo que temos como um de nossos pilares, pois entendemos que o mercado é dinâmico, suas demandas são diversas e a Odic está preparada para atender todas elas.</p>
      </div>
      <div className='feedback flexAlignDirection'>
        <p className='textTitle'>Feedback</p>
        <h1><p>“</p>Agradeço o empenho e dedicação no que foi solicitado. Tínhamos um tempo curto para adquirir o resultado esperado, e vocês foram correspondentes com a velocidade e qualidade que o trabalho demandava, não tivemos nenhuma revisão.</h1>
        <p>Velocidade e excelência são palavras que posso definir o trabalho de vocês.</p>
        <h1>Nossa empresa agradece o comprometimento de toda a equipe, um abraço!<p>”</p></h1>
        <p className='author'>Felipe Hideki Oki - Gerente de Fábrica e Coordenador de Compras</p>
      </div>
      <PortfolioFooter />
    </div>
  )
}
