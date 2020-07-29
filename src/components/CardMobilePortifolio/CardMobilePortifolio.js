import React from 'react'

import './cardMobilePortifolioStyle.css'

export default function CardMobilePortifolio ({ title, isSoon, subTitle, background, image1, image2, image3, backgroundColor }) {
  function renderTextSoon () {
    return <text className='textSoon'>(em breve...)</text>
  }

  return (
    <div className='divCardMobile' style={{ backgroundColor: backgroundColor }}>
      <div className='divCardTitle'>
        <text>{title}</text>
        {isSoon && renderTextSoon()}
      </div>
      <text className='subTilte'>{subTitle}</text>
      <div className='mobileImages'>
        <img alt='' src={image1} />
        <img alt='' src={image2} />
        <img alt='' src={image3} />
      </div>
    </div>
  )
}
