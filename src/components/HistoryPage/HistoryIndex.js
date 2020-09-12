import React from 'react'
import { ToggleButton } from '../Button'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayHeroPlayedAmount from './DisplayHeroPlayedAmount'

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
      {/* alphabetisch pls */}
      <DisplayHeroPlayedAmount playedHeroAmount={playedHeroAmount} />
    </Container>
  )

  function getAvgKda(gameStats) {
    let sum = 0
    gameStats.forEach((game) => {
      sum += game.kda
      return sum
    })
    const avgKda = sum / gameStats.length
    return avgKda.toFixed(1)
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
}

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: papayawhip;
  justify-content: space-between;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
