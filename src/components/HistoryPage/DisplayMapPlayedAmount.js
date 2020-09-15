import React from 'react'
import styled from 'styled-components'

export default ({ playedMapAmount }) => {
  const orderedMapList = {}
  Object.keys(playedMapAmount)
    .sort()
    .forEach((key) => (orderedMapList[key] = playedMapAmount[key]))
  return (
    <Container>
      {Object.entries(orderedMapList).map(([map, amount]) => {
        return (
          <Spacer key={map}>
            <span>{map}:</span> <span>{amount}</span>
          </Spacer>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  margin-right: 10px;
`

const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
`
