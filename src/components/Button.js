import React from 'react'
import styled from 'styled-components'

export function SubmitButton() {
  return <StyledButton>submit</StyledButton>
}

const StyledButton = styled.button`
  width: 70px;
  margin: 10px 10px;
  align-self: flex-end;
`
