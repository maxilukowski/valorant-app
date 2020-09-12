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

/* import React from 'react'
import { ToggleButton } from '../Button'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'

export default ({ switchPage, gameStats, togglePage }) => {
  const [playedHeroAmount, setPlayedHeroAmount] = useState({})

  useEffect(() => {
    heroPickCounter(gameStats)
  }, [gameStats])

  return (
    <Container>
      <StyledDiv>
        <span style={{ margin: '10px 10px' }}>HistoryPage</span>
        <ToggleButton
          switchPage={switchPage}
          togglePage={togglePage}
          text='Home'
        />
      </StyledDiv>
      <div> Matches played: {gameStats.length}</div>
      <div>Your avg KDA :{getAvgKda(gameStats)} </div>
      {Object.entries(playedHeroAmount).map(([hero, amount]) => {
        return (
          <div key={hero}>
            You played {hero} {amount} times
          </div>
        )
      })}
    </Container>
  )

  function getAvgKda(gameStats) {
    let sum = 0
    gameStats.forEach((game) => {
      sum += game.kda
      return sum
    })
    const avgKda = sum / gameStats.length
    return avgKda
  }

  function heroPickCounter(gameStats) {
    let heroesPicked = {}

    gameStats
      .map((game) => game.heroPicked)
      .filter((hero) => hero !== '')
      .forEach((hero) => {
        if (!heroesPicked.hasOwnProperty(hero)) {
          heroesPicked[hero] = 0
        }
        heroesPicked[hero]++
      })
    setPlayedHeroAmount(heroesPicked)
  }
} */
