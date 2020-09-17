import React from 'react'
import styled from 'styled-components'

export default ({ heroes }) => {
  const orderedHeroList = {}
  Object.keys(heroes)
    .sort()
    .forEach((key) => (orderedHeroList[key] = heroes[key]))
  return (
    <Container>
      {Object.entries(orderedHeroList).map(([hero, amount]) => {
        return (
          <Spacer key={hero}>
            <span>{hero}:</span> {amount}
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
`
const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
`
