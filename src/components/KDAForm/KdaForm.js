import React, { useState } from 'react'
import InsertKda from './InsertKda'
import MapOptions from './MapOptions'
import WinOrLoss from './WinOrLoss'
import styled from 'styled-components'
import HeroOptions from './HeroOptions'
import { SubmitButton, ToggleButton } from '../Button'
import LastGameKda from './LastGameKda'

export default ({ onSubmit, switchPage, togglePage }) => {
  const [form, setForm] = useState({
    kill: '',
    death: '',
    assist: '',
    map: '',
    hero: '',
    winOrLoss: '',
  })

  return (
    <Container>
      <ToggleButton
        switchPage={switchPage}
        togglePage={togglePage}
        text='History'
      />
      <StyledForm onSubmit={handleSubmit}>
        <InsertKda setFormData={setForm} formData={form} />
        <LastGameKda form={form} evaluateKda={evaluateKda} />
        <MapOptions setFormData={setForm} formData={form} />
        <HeroOptions setFormData={setForm} formData={form} />
        <WinOrLoss setFormData={setForm} formData={form} />
        <SubmitButton />
      </StyledForm>
    </Container>
  )

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit({
      kda: evaluateKda(form),
      map: form.map,
      hero: form.hero,
      winOrLoss: form.winOrLoss,
    })
    event.target.reset()
  }

  function evaluateKda({ kill, death, assist }) {
    if (kill && death && assist)
      return ((parseInt(kill) + parseInt(assist)) / death).toFixed(1)
  }
}

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: hotpink;
  justify-content: space-between;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
