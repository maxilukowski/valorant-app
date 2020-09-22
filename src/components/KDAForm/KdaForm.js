import React, { useState } from 'react'
import InsertKda from './InsertKda'
import MapOptions from './MapOptions'
import WinOrLoss from './WinOrLoss'
import styled from 'styled-components'
import HeroOptions from './HeroOptions'
import { SubmitButton } from '../Button'
import LastGameKda from './LastGameKda'

export default ({ onSubmit }) => {
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: #eddcd2;
  height: 100vh;
  padding: 20px 10px;
  padding-top: 50px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  padding: 30px;
  background: #f4a261;
  height: 80vh;
  border-radius: 4px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  color: #264653;
`
