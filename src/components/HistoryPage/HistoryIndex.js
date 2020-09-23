import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayHeroAndMapPlayed from './DisplayHeroAndMapPlayed'
import LastFiveGames from './LastFiveGames'

const gameStatsKeys = ['mapPlayed', 'heroPicked']

export default ({ gameStats }) => {
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
  padding-top: 50px;
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
