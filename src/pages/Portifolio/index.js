import React from 'react'

import OdicHeader from '../../components/Header/OdicHeader'
import PortfolioCard from '../../components/PortfolioCard'

import MatchfyCard from '../../assets/portfolio/matchfyCard.png'
import MatchfyMobileCard from '../../assets/portfolio/matchfyMobileCard.png'
import GrandeDesafioCard from '../../assets/portfolio/grandeDesafioCard.png'
import GrandeDesafioMobileCard from '../../assets/portfolio/grandeDesafioMobileCard.png'
import TurboMaquinasCard from '../../assets/portfolio/turboMaquinasCard.png'
import TurboMaquinasMobileCard from '../../assets/portfolio/turboMaquinasMobileCard.png'

import './portifolioStyle.css'

export default function Portfolio () {
  return (
    <div className='portfolio'>
      <OdicHeader pageSelected='Portfólio' />
      <div className='divTitle'>
        <p>Portfólio</p>
      </div>
      <PortfolioCard page='/matchfy' image={MatchfyCard} imageMobile={MatchfyMobileCard} number='01' title='Matchfy' description='Aplicativo mobile focado em relacionamentos entre universitários!' />
      <PortfolioCard page='/grandeDesafio' image={GrandeDesafioCard} imageMobile={GrandeDesafioMobileCard} number='02' title='Grande Desafio' description='Aplicativo de competição de incentivo à sustentabilidade.' isInverted />
      <PortfolioCard page='/turboMaquinas' image={TurboMaquinasCard} imageMobile={TurboMaquinasMobileCard} number='03' title='Turbo Máquinas' description='Modernização de folder empresarial.' />
    </div>
  )
}
