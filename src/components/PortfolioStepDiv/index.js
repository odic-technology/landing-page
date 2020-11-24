import React from 'react'

import './portfolioStepDivStyle.css'

export default function PortfolioStepDiv ({ children, text1, text2, color1, color2 }) {
  return (
    <div className='portfolioStepDiv'>
      <div className='stepDivLeft flexDirection textBorderBottom' style={{ backgroundColor: color1 }}>
        <text className='textTitle'>{text1}</text>
        <text>{text2}</text>
      </div>
      <div className='stepDivRight' style={{ backgroundColor: color2 }}>
        {children}
      </div>
    </div>
  )
}
