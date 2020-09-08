import React, { useState } from 'react'
import InsertKda from './InsertKda'
import MapOptions from './MapOptions'
import WinOrLoss from './WinOrLoss'
import styled from 'styled-components'
import HeroOptions from './HeroOptions'
import { SubmitButton } from '../Button'

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
    <>
      <StyledForm onSubmit={handleSubmit}>
        <InsertKda setFormData={setForm} formData={form} />
        <MapOptions setFormData={setForm} formData={form} />
        <HeroOptions setFormData={setForm} formData={form} />
        <WinOrLoss setFormData={setForm} formData={form} />
        <SubmitButton />
      </StyledForm>
    </>
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
  /*   function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  } */
  function evaluateKda({ kill, death, assist }) {
    return (parseInt(kill) + parseInt(assist)) / death
  }
}

const StyledForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: hotpink;
  justify-content: space-between;
`
