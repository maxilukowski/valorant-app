import React from 'react'

export default ({ playedHeroAmount }) => {
  return (
    <>
      {Object.entries(playedHeroAmount).map(([hero, amount]) => {
        return (
          <div key={hero}>
            You played {hero} {amount} times
          </div>
        )
      })}
    </>
  )
}
