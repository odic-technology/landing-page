import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import OdicHeader from '../../components/Header/OdicHeader'
import MatchfyLogo from '../../assets/matchfyLogo.svg'
import MatchfyLogoWhite from '../../assets/matchfyLogoWhite.svg'
import MuseuLogo from '../../assets/museuLogo.svg'
import TurboMaquinasLogo from '../../assets/turboMaquinasLogo.svg'

import './portifolioStyle.css'

export default function Portfolio () {
  const [hoverCard1, setHoverCard1] = useState(false)
  const [hoverCard2, setHoverCard2] = useState(false)
  const [hoverCard3, setHoverCard3] = useState(false)

  return (
    <div className='portifolio'>
      <OdicHeader pageSelected='Portfólio' />
      <div className='divTitle'>
        <text className='title'>Portfólio</text>
      </div>
      <div>
        <div className='cards'>
          <div className='cardRow'>
            <Link to='/mobile'>
              <div
                className={hoverCard1 ? 'card1 card1Background' : 'card1'}
                onTouchStart={() => setHoverCard1(true)}
                onTouchEnd={() => setHoverCard1(false)}
                onMouseEnter={() => setHoverCard1(true)}
                onMouseLeave={() => setHoverCard1(false)}
              >
                {hoverCard1 ? <img src={MatchfyLogoWhite} alt='Matchfy' /> : <img src={MatchfyLogo} alt='Matchfy' />}
                <div className='separator' />
                <text className={hoverCard1 ? 'textHover' : ''}>Aplicativo mobile focado em relacionamentos entre universitários!</text>
              </div>
            </Link>
          </div>
          <div className='cardRow'>
            <Link to='/web'>
              <div
                className={hoverCard2 ? 'card2 card2Background' : 'card2'}
                onTouchStart={() => setHoverCard2(true)}
                onTouchEnd={() => setHoverCard2(false)}
                onMouseEnter={() => setHoverCard2(true)}
                onMouseLeave={() => setHoverCard2(false)}
              >
                <img src={MuseuLogo} alt='Museu' />
                <text className={hoverCard2 ? 'textHover card2Title' : 'card2Title'}>Grande Desafio 2020</text>
                <div className='separator' />
                <text className={hoverCard2 ? 'textHover' : ''}>Aplicativo de competição de incentivo à sustentabilidade</text>
              </div>
            </Link>
          </div>
          <div className='cardRow'>
            <Link to='/design'>
              <div
                className={hoverCard3 ? 'card3 card3Background' : 'card3'}
                onTouchStart={() => setHoverCard3(true)}
                onTouchEnd={() => setHoverCard3(false)}
                onMouseEnter={() => setHoverCard3(true)}
                onMouseLeave={() => setHoverCard3(false)}
              >
                <img src={TurboMaquinasLogo} alt='TurboMaquinas' />
                <div className='separator' />
                <text className={hoverCard3 ? 'textHover' : ''}>Modernização de folder empresarial</text>
              </div>
            </Link>
          </div>
          <div className='divMargin' />
        </div>
      </div>
    </div>
  )
}
