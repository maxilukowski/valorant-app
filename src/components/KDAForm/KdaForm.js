import React, { useState } from 'react'
import InsertKda from './InsertKda'
import MapOptions from './MapOptions'
import WinOrLoss from './WinOrLoss'
import styled from 'styled-components'
import HeroOptions from './HeroOptions'
import { SubmitButton, ToggleButton } from '../Button'
import LastGameKda from './LastGameKda'

export default ({ onSubmit, togglePage }) => {
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
      <ToggleButton togglePage={togglePage} text='History' />
      <StyledForm onSubmit={handleSubmit}>
        <InsertKda setFormData={setForm} formData={form} />
        <LastGameKda evaluateKda={evaluateKda} formData={form} />
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
    resetForm()
  }

  function evaluateKda({ kill, death, assist }) {
    let kda
    if (kill && death && assist) {
      kda = (parseInt(kill) + parseInt(assist)) / death
      if (kda / Math.round(kda) === 1) return kda
      else return kda.toFixed(1)
    } else return 0
  }

  function resetForm() {
    setForm({
      kill: '',
      death: '',
      assist: '',
      map: '',
      hero: '',
      winOrLoss: '',
    })
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: hotpink;
  height: 100vh;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
