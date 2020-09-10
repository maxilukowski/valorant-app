import React from 'react'
import styled from 'styled-components'

export function SubmitButton() {
  return <StyledSubmitButton>submit</StyledSubmitButton>
}

export function ToggleButton({ switchPage, text }) {
  return (
    <StyledSubmitButton onClick={() => switchPage()}>{text}</StyledSubmitButton>
  )
}

const StyledSubmitButton = styled.button`
  width: 70px;
  margin: 10px 10px;
  align-self: flex-end;
`
