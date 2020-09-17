import React from 'react'
import { ToggleButton } from '../Button'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayHeroAndMapPlayed from './DisplayHeroAndMapPlayed'
import LastFiveGames from './LastFiveGames'

export default ({ gameStats, togglePage }) => {
  /* const [playedHeroAmount, setPlayedHeroAmount] = useState({})
  const [playedMapAmount, setPlayedMapAmount] = useState({}) */
  const [gameStatsCounted, setGameStatsCounted] = useState({
    heroes: {},
    maps: {},
  })

  useEffect(() => {
    setGameStatsCounted(getGameStats(gameStats))
  }, [gameStats])

  return (
    <Container>
      <StyledDiv>
        <span style={{ marginTop: '10px ' }}>HistoryPage</span>
        <ToggleButton togglePage={togglePage} text='Home' />
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

  /* setPlayedHeroAmount(heroPicked(gameStats)) */
  /* setPlayedMapAmount(mapPlayed(gameStats)) */

  /*   .map((game) => {
    return {
      heroPicked: game.heroPicked,
      mapPlayed: game.mapPlayed
    }}) */

  function getGameStats(gameStats) {
    let gameStatsCounter = {
      maps: {},
      heroes: {},
    }
    gameStats
      .map((game) => ({
        heroPicked: game.heroPicked,
        mapPlayed: game.mapPlayed,
      }))
      .filter(({ mapPlayed }) => mapPlayed !== '')
      .filter(({ heroPicked }) => heroPicked !== '')
      //mby hübsher---------------------------------------------------------------?
      .forEach(({ heroPicked, mapPlayed }) => {
        if (!gameStatsCounter.heroes.hasOwnProperty(heroPicked)) {
          gameStatsCounter.heroes[heroPicked] = 0
        }
        if (!gameStatsCounter.maps.hasOwnProperty(mapPlayed)) {
          gameStatsCounter.maps[mapPlayed] = 0
        }
        gameStatsCounter.heroes[heroPicked]++
        gameStatsCounter.maps[mapPlayed]++
      })
    return gameStatsCounter
  }
  /*   function mapPlayed(gameStats) {
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
  } */
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
