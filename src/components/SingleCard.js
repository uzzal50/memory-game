import React from 'react'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div key={card.id} className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} className='front' alt='card-front' />
        <img
          src='/img/cover.png'
          className='back'
          alt='card-back'
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default SingleCard
