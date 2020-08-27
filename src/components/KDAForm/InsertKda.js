import React from 'react'
import styled from 'styled-components'

const KDA = ['kill', 'death', 'assist']

export default ({ updateData }) => {
  return (
    <Container>
      {KDA.map((value) => {
        return (
          <StyledLabel key={value}>
            {value}
            <input
              type='number'
              onChange={(event) => updateData(value, event.target.value)}
            ></input>
          </StyledLabel>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
