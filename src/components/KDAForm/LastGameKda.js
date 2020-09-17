import React from 'react'
import styled from 'styled-components'

export default ({ formData, evaluateKda }) => {
  return (
    <Wrapper>
      your kda this game <span>{evaluateKda(formData)}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
