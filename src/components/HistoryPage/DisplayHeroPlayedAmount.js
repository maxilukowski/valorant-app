import React from 'react'

export default ({ playedHeroAmount }) => {
  const orderedHeroList = {}
  Object.keys(playedHeroAmount)
    .sort()
    .forEach((key) => (orderedHeroList[key] = playedHeroAmount[key]))
  return (
    <>
      {Object.entries(orderedHeroList).map(([hero, amount]) => {
        return (
          <div key={hero}>
            You played {hero} {amount} times
          </div>
        )
      })}
    </>
  )
}
