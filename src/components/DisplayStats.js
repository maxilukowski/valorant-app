import React from 'react'
import styled from 'styled-components'

export default ({ kda }) => {
  return <Container>kda of game: {kda}</Container>
}

const Container = styled.div`
  background: steelblue;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
