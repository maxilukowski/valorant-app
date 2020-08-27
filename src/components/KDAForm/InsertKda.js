import React from 'react'
import styled from 'styled-components'

const KDA = ['Kill', 'Death', 'Assist']

export default ({ updateData }) => {
  return (
    <Wrapper>
      {/* @TODO 1 MUST: automate codevia map over array instead of hardcoded input fields. */}
      <StyledLabel>
        Kill
        <input
          type='number'
          onChange={(event) => updateData('kill', event.target.value)}
        ></input>
      </StyledLabel>
      <StyledLabel>
        Death
        <input
          type='number'
          onChange={(event) => updateData('death', event.target.value)}
        ></input>
      </StyledLabel>
      <StyledLabel>
        Assist
        <input
          type='number'
          onChange={(event) => updateData('assist', event.target.value)}
        ></input>
      </StyledLabel>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
