import React from 'react'
import styled from 'styled-components'

export default ({ kda, map, hero, winOrLoss }) => {
  return (
    <Container>
      <div>kda of game: {kda}</div>
      <div>played map: {map}</div>
      <div>hero played: {hero}</div>
      <div>
        win or loss:{' '}
        {winOrLoss === 'Win' || 'Loss' ? <span>{winOrLoss}</span> : null}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: steelblue;
  width: 30%;
  justify-content: space-between;
`
