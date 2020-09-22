import React from 'react'
import styled from 'styled-components'

export function SubmitButton() {
  return <StyledToggleButton>submit</StyledToggleButton>
}

export function ToggleButton({ text, togglePage }) {
  return (
    <StyledToggleButton onClick={() => togglePage()}>{text}</StyledToggleButton>
  )
}

const StyledToggleButton = styled.button`
  display: inline-block;
  align-self: flex-end;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  background-color: #264653;
  padding: 0.7em 1.7em;
  color: #eddcd2;
  border: none;
  text-align: center;
  border-radius: 4px;
  outline: none;
`
