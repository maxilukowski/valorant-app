import React, { useState } from 'react'
import MapOptions from './MapOptions'
import WinOrLoss from './WinOrLoss'
import styled from 'styled-components'
import InsertKda from './InsertKda'
import HeroOptions from './HeroOptions'
import { SubmitButton } from '../Button'

export default ({ onSubmit }) => {
  const [kdaValue, setKdaValue] = useState({
    kill: '',
    death: '',
    assist: '',
  })

  return (
    <>
      <StyledForm onSubmit={formSubmit}>
        <InsertKda updateData={updateKda} />
        <MapOptions updateData={updateMap} />
        <HeroOptions />
        <WinOrLoss />
        <SubmitButton />
      </StyledForm>
    </>
  )

  function formSubmit(event) {
    event.preventDefault()
    onSubmit({ kda: evaluateKda(kdaValue), map: updateMap() })
    event.target.reset()
  }
  function updateKda(name, value) {
    /*warum sind die brackets um name nötig?// wieso benötige ich nichtmehr kdavalue[name]?*/
    setKdaValue({ ...kdaValue, [name]: parseInt(value) })
  }
  function evaluateKda({ kill, death, assist }) {
    return (kill + assist) / death
  }
  function updateMap(map) {
    console.log(map)
    return map
  }
}

const StyledForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: hotpink;
  justify-content: space-between;
`
