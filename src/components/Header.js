import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default ({ togglePage }) => {
  return (
    <Container>
      <Link to='/History'>
        <NavButton>History</NavButton>
      </Link>
      <Link to='/Home'>
        <NavButton>Home</NavButton>
      </Link>
    </Container>
  )
}

const Container = styled.nav`
  background: #264653;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

const NavButton = styled.div`
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
  height: 100%;
`
