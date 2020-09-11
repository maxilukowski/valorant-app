import React from 'react'
import styled from 'styled-components'

export default ({ form, evaluateKda }) => {
  return (
    <Wrapper>
      your kda this game <span>{evaluateKda(form)}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
