import React from 'react'
import styled from 'styled-components'

export default ({ gameStats }) => {
  const lastFiveGames = gameStats.slice(-5)

  return (
    <Container>
      <Headline>Recent games</Headline>
      {lastFiveGames.map((game) => {
        return (
          <Headline key={game.id}>
            <Spacer>
              <span>kda:</span> {game.kda}
            </Spacer>
            <Spacer>
              <span>hero:</span> {game.heroPicked}
            </Spacer>
            <Spacer>
              <span>map:</span> {game.mapPlayed}
            </Spacer>
            {game.winOrLoss === 'Win' ? <div>Win</div> : <div>Loss</div>}
          </Headline>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10px;
`
const Headline = styled.div`
  margin: 10px 0;
  width: 100px;
`
const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
`
