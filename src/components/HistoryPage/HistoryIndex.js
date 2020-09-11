import React from 'react'
import { ToggleButton } from '../Button'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'

export default ({ switchPage, gameStats, togglePage }) => {
  const [sagePlayed, setSagePlayed] = useState('')
  const [sovaPlayed, setSovaPlayed] = useState('')
  const [pheonixPlayed, setPheonixPlayed] = useState('')
  const [omenPlayed, setOmenPlayed] = useState('')
  useEffect(() => {
    heroPickCounter(gameStats)
  })

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
      <div> matches played: {gameStats.length}</div>
      <div>your avg KDA :{getAvgKda(gameStats)} </div>
      <div>sagepicks{sagePlayed}</div>
      <div>sovapick{sovaPlayed}</div>
      <div>pheonixpicks{pheonixPlayed}</div>
      <div>omenpicks{omenPlayed}</div>
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
    let sagePlayedAmount = 0
    let sovaPlayedAmount = 0
    let pheonixPlayedAmount = 0
    let omenPlayedAmount = 0
    gameStats.forEach((game) => {
      if (game.heroPicked === 'Sage') sagePlayedAmount++
      if (game.heroPicked === 'Sova') sovaPlayedAmount++
      if (game.heroPicked === 'Pheonix') pheonixPlayedAmount++
      if (game.heroPicked === 'Omen') omenPlayedAmount++
    })
    setSagePlayed(sagePlayedAmount)
    setSovaPlayed(sovaPlayedAmount)
    setPheonixPlayed(pheonixPlayedAmount)
    setOmenPlayed(omenPlayedAmount)
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
