import React from 'react'
import { ToggleButton } from '../Button'
import styled from 'styled-components'

export default ({ switchPage, gameStats, togglePage }) => {
  let sum = 0
  gameStats.forEach((game) => {
    sum += game.kda
    return sum
  })
  const avgKda = sum / gameStats.length

  return (
    <Container>
      <ToggleButton
        switchPage={switchPage}
        togglePage={togglePage}
        text='Home'
      />
      <div>HistoryPage</div>
      <div> matches played: {gameStats.length}</div>
      <div>your avg KDA = {avgKda}</div>
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: papayawhip;
  justify-content: space-between;
`
