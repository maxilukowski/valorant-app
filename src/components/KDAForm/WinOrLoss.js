import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Wrapper>
      W/L
      <select>
        <option value='Win'>Win</option>
        <option value='Loss'>Loss</option>
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
