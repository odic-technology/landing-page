import React from 'react'

import CheckIcon from '../../assets/checkIcon.svg'
import RightArrow from '../../assets/rightArrow.svg'

import './contactRightColStyle.css'

export default function ContactRightColumn ({ setTypeSelected, typeSelected, isFirstSelected, isSecondSelected, isThirdSelected, selectItem, quantitySelected, setFormAvailable }) {
  function renderText () {
    if (window.innerWidth > 600) {
      return (
        <div className='divText'>
          <text>Gostaria de criar algo conosco?</text>
          <text><text>É muito simples</text>, basta selecionar as</text>
          <text>opções abaixo:</text>
        </div>
      )
    } else {
      return (
        <div className='divText'>
          <text>Gostaria de criar algo conosco? É muito simples!</text>
          <text><text>basta selecionar as opções abaixo:</text></text>
        </div>
      )
    }
  }

  return (
    <div className='contactRightCol'>
      {renderText()}
      <div className='cardContact'>
        <div className='cardContactHeader'>
          <div className='cardContactType'>
            <text onClick={() => setTypeSelected(1)} className={typeSelected === 1 ? 'headerSelected' : ''}>Web</text>
            <div className={typeSelected === 1 ? 'headerSelectedTriangle' : ''} />
            <img src={CheckIcon} className={isFirstSelected ? 'headerSelectedCheck' : ''} alt='' />
          </div>
          <div className='cardContactType'>
            <text onClick={() => setTypeSelected(2)} className={typeSelected === 2 ? 'headerSelected' : ''}>Mobile</text>
            <div className={typeSelected === 2 ? 'headerSelectedTriangle' : ''} />
            <img src={CheckIcon} className={isSecondSelected ? 'headerSelectedCheck' : ''} alt='' />
          </div>
          <div className='cardContactType'>
            <text onClick={() => setTypeSelected(3)} className={typeSelected === 3 ? 'headerSelected' : ''}>Design</text>
            <div className={typeSelected === 3 ? 'headerSelectedTriangle' : ''} />
            <img src={CheckIcon} className={isThirdSelected ? 'headerSelectedCheck' : ''} alt='' />
          </div>
        </div>
        <div className='cardContactContent'>
          <div>
            <text className={typeSelected === 1 ? 'textSelected' : ''}>Está precisando de um site moderno, interativo e que te ajude a escalar ou consolidar seus negócios? Nós podemos te ajudar!</text>
            <text className={typeSelected === 2 ? 'textSelected' : ''}>Está procurando uma maneira de transformar sua ideia em um aplicativo mobile? Você está no lugar certo!</text>
            <text className={typeSelected === 3 ? 'textSelected' : ''}>Gostaria de criar uma identidade visual para impactar diretamente no sucesso de seus negócios? você veio ao lugar certo!</text>
          </div>
          <div className='cardContactButton'>
            <button
              onClick={() => { selectItem() }}
              className={
                typeSelected === 1 && isFirstSelected ? 'typeChecked'
                  : typeSelected === 2 && isSecondSelected ? 'typeChecked'
                    : typeSelected === 3 && isThirdSelected ? 'typeChecked'
                      : ''
              }
            >
              {
                typeSelected === 1 && isFirstSelected ? 'Desfazer'
                  : typeSelected === 2 && isSecondSelected ? 'Desfazer'
                    : typeSelected === 3 && isThirdSelected ? 'Desfazer'
                      : 'Tenho interesse!'
              }
            </button>
          </div>
        </div>
      </div>
      <div className='bottomRightColumn'>
        <text className={quantitySelected === 0 ? 'hideText' : ''}>{quantitySelected} de 3 selecionado(s)</text>
        <div>
          <button onClick={() => setFormAvailable(2)}><img alt='' />Solicitar contato<img src={RightArrow} alt='' /></button>
        </div>
      </div>
    </div>
  )
}
