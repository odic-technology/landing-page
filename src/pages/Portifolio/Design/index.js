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
        <text>O projeto Turbo Máquinas foi um grande desafio realizado por nossa equipe. A empresa, já muito bem estabelecida no mercado, estava passando por um processo ainda maior de crescimento e visibilidade perante o mercado em que atua. Seu representante entrou em contato com um de nossos membros a fim de estudar a possibilidade da modernização completa do catálogo de seus produtos e serviços em um curto período de tempo (3 dias).</text>
        <div className='cardLogo'>
          <img alt='Turbo Maquinas' src={LogoTurbo} />
        </div>
      </div>
      <div className='goals'>
        <text className='textHeader'>Objetivos</text>
        <text>A missão era modernizar todo o design do catálogo de produtos e serviços, além de traduzí-lo inteiramente para a língua inglesa usando os dados de um catálogo obsoleto de cerca de décadas atrás que a empresa já possuía, tudo isto em um tempo recorde. </text>
      </div>
      <div className='colorPallete'>
        <div className='textPallete'>
          <text className='textHeader'>Paleta de cores</text>
          <text>Optamos por cores que remetessem à identidade visual da empresa para que, quando as pessoas estivessem lendo o folder, lembrassem do logotipo.</text>
        </div>
        <div className='color'>
          <div className='square blue' />
          <text>#023B7E</text>
        </div>
        <div className='color'>
          <div className='square red' />
          <text>#EF3C1F</text>
        </div>
      </div>
      <PortfolioFont />
      <div className='improvement'>
        <text className='textHeader'>Remodelação</text>
        <div className='comparison'>
          <div className='divHalf'>
            <text>Antes</text>
            <img alt='Turbo Maquinas' className='beforeImage' src={PortfolioTurboBefore1} />
          </div>
          <div className='divHalf'>
            <text>Depois</text>
            <div className='divHalfImages'>
              <img alt='Turbo Maquinas' className='afterImage1' src={PortfolioTurboAfter1} />
              <img alt='Turbo Maquinas' className='afterImage' src={PortfolioTurboAfter2} />
            </div>
          </div>
        </div>
        <div className='comparison'>
          <div className='divHalf'>
            <img alt='Turbo Maquinas' className='beforeImage' src={PortfolioTurboBefore2} />
          </div>
          <div className='divHalfCenter'>
            <div className='divHalfImages'>
              <img alt='Turbo Maquinas' className='afterImage' src={PortfolioTurboAfter3} />
            </div>
          </div>
        </div>
        <div className='comparison'>
          <div className='divHalf'>
            <img alt='Turbo Maquinas' className='beforeImage' src={PortfolioTurboBefore3} />
          </div>
          <div className='divHalfCenter'>
            <div className='divHalfImages'>
              <img alt='Turbo Maquinas' className='afterImage' src={PortfolioTurboAfter4} />
            </div>
          </div>
        </div>
      </div>
      <div className='learnings'>
        <text className='textHeader'>Aprendizados</text>
        <text>Resolver o case da Turbo Máquinas agregou muito para nossa experiência! Nós conseguimos em um curto período de tempo: entender a dor do cliente, esboçar uma solução rápida que atendesse suas necessidades, validar com nosso cliente e entregar a tempo para que nosso trabalho surtisse o efeito desejado do valor que estávamos propostos a entregar. Conseguir desafiar diferentes prazos é algo que temos como um de nossos pilares, pois entendemos que o mercado é dinâmico, suas demandas são diversas e a Odic está preparada para atender todas elas.</text>
      </div>
      <div className='feedback'>
        <text className='textHeader'>Feedback</text>
        <text><text>“</text>Agradeço o empenho e dedicação no que foi solicitado. Tínhamos um tempo curto para adquirir o resultado esperado, e vocês foram correspondentes com a velocidade e qualidade que o trabalho demandava, não tivemos nenhuma revisão.</text>
        <text>Velocidade e excelência são palavras que posso definir o trabalho de vocês.</text>
        <text>Nossa empresa agradece o comprometimento de toda a equipe, um abraço!<text>”</text></text>
        <text className='author'>Felipe Hideki Oki - Gerente de Fábrica e Coordenador de Compras</text>
      </div>
      <PortfolioFooter />
    </div>
  )
}
