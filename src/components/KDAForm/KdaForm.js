import React, { useState } from 'react'
import MapOptions from './MapOptions'
import WinOrLoss from './WinOrLoss'
import styled from 'styled-components'
import InsertKda from './InsertKda'
import HeroOptions from './HeroOptions'
import { SubmitButton } from '../Button'

export default ({ onSubmit }) => {
  // @TODO 2 Would be cool: Use useState hook instead of this object implementation
  const [kdaValue, setKdaValue] = useState({
    kill: '',
    death: '',
    assist: '',
  })

  return (
    <>
      <StyledForm onSubmit={formSubmit}>
        <InsertKda updateData={updateData} />
        <MapOptions />
        <HeroOptions />
        <WinOrLoss />
        <SubmitButton />
      </StyledForm>
    </>
  )
  function formSubmit(event) {
    event.preventDefault()
    onSubmit(kdaValue)
  }
  function updateData(name, value) {
    /*warum sind die brackets um name nötig?// wieso benötige ich nichtmehr kdavalue[name]?*/
    setKdaValue({ ...kdaValue, [name]: parseInt(value) })
  }
}

const StyledForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: hotpink;
  justify-content: space-between;
`
