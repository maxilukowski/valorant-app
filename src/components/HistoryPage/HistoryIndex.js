import React from 'react'
import { ToggleButton } from '../Button'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayHeroAndMapPlayed from './DisplayHeroAndMapPlayed'
import LastFiveGames from './LastFiveGames'
import { Link } from 'react-router-dom'

const gameStatsKeys = ['mapPlayed', 'heroPicked']

export default ({ gameStats, togglePage }) => {
  const [gameStatsCounted, setGameStatsCounted] = useState({
    heroPicked: {},
    mapPlayed: {},
  })

  useEffect(() => {
    const gameStatsCounters = iterateGameStatsKeys(gameStats, gameStatsKeys)
    setGameStatsCounted(gameStatsCounters)
  }, [gameStats])

  return (
    <Container>
      <StyledDiv>
        <span style={{ marginTop: '10px ' }}>HistoryPage</span>
        <Link to='/Home'>
          <ToggleButton togglePage={togglePage} text='Home' />
        </Link>
      </StyledDiv>
      <div> Matches played: {gameStats.length}</div>
      <div>Your avg KDA :{getAvgKda(gameStats)} </div>
      <DisplayHeroAndMapPlayed gameStatsCounted={gameStatsCounted} />
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
}

function iterateGameStatsKeys(gameStats, array) {
  const gameStatsCounters = {}

  array.forEach(
    (key) => (gameStatsCounters[key] = getGameStatsCounter(gameStats, key))
  )

  return gameStatsCounters
}

function getGameStatsCounter(gameStats, gameKey) {
  const gameStatsCounter = {}
  gameStats
    .map((game) => game[gameKey])
    .filter((selectedKey) => selectedKey !== '')
    .forEach((selectedKey) => {
      if (!gameStatsCounter[selectedKey]) {
        gameStatsCounter[selectedKey] = 0
      }
      gameStatsCounter[selectedKey]++
    })
  return gameStatsCounter
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: tomato;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  padding-left: 10px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
