import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import DisplayStats from './components/DisplayStats'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'

export default function App() {
  const [kda, setKda] = useState('')
  const [playedMap, setPlayedMap] = useState('')
  const [playedHero, setPlayedHero] = useState('')
  const [winOrLoss, setWinOrLoss] = useState('')

  useEffect(() => {
    axios
      .post('http://localhost:3000/stats', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  })

  return (
    <Container>
      <KdaForm onSubmit={setAllInfo} />
      {/* @TODO 1 Would be great: Move right and display all form values */}
      {/* @TODO 2 udemy */}
      {/* @TODO 3 Optional: Try to store data into json-server */}
      {/* @TODO 4 Optional: Try to read data from json-server */}
      <DisplayStats
        kda={kda}
        map={playedMap}
        hero={playedHero}
        winOrLoss={winOrLoss}
      />
    </Container>
  )

  function setAllInfo(formData) {
    setPlayedHero(formData.hero)
    setKda(formData.kda)
    setPlayedMap(formData.map)
    setWinOrLoss(formData.winOrLoss)
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
