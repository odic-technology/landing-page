import React from 'react'
import './portfolioFontStyle.css'

export default function PortfolioFooter () {
  return (
    <div className='portfolioFonts'>
      <div className='fonts'>
        <text className='textHeader'>Fonte</text>
        <div className='fontsFamily'>
          <text className='textHeader'>Montserrat</text>
          <text>Designed by Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral, Jacques Le Bailly</text>
        </div>
        <text>Três pratos de trigo para três tigres tristes.</text>
      </div>
    </div>
  )
}
