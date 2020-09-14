import React from 'react'
import { ToggleButton } from '../Button'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayHeroPlayedAmount from './DisplayHeroPlayedAmount'
import LastFiveGames from './LastFiveGames'
import DisplayMapPlayedAmount from './DisplayMapPlayedAmount'

export default ({ gameStats, togglePage }) => {
  const [playedHeroAmount, setPlayedHeroAmount] = useState({})
  const [playedMapAmount, setPlayedMapAmount] = useState({})

  useEffect(() => {
    statsCounter(gameStats)
  }, [])

  return (
    <Container>
      <StyledDiv>
        <span style={{ margin: '10px 10px' }}>HistoryPage</span>
        <ToggleButton togglePage={togglePage} text='Home' />
      </StyledDiv>
      <div> Matches played: {gameStats.length}</div>
      <div>Your avg KDA :{getAvgKda(gameStats)} </div>
      {/* alphabetisch pls */}
      {
        <SplitDisplay>
          <div>
            <DisplayHeroPlayedAmount playedHeroAmount={playedHeroAmount} />
          </div>
          <div>
            <DisplayMapPlayedAmount playedMapAmount={playedMapAmount} />
          </div>
        </SplitDisplay>
      }
      <LastFiveGames gameStats={gameStats} />
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

  function statsCounter(gameStats) {
    setPlayedHeroAmount(heroPicked(gameStats))
    setPlayedMapAmount(mapPlayed(gameStats))
  }

  function heroPicked(gameStats) {
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
    return heroesPicked
  }
  function mapPlayed(gameStats) {
    let mapPlayed = {}
    gameStats
      .map((game) => game.mapPlayed)
      .filter((map) => map !== '')
      .forEach((map) => {
        if (!mapPlayed.hasOwnProperty(map)) {
          mapPlayed[map] = 0
        }
        mapPlayed[map]++
      })
    return mapPlayed
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

const SplitDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
