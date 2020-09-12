import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import DisplayStats from './components/DisplayStats'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import HistoryIndex from './components/HistoryPage/HistoryIndex'

export default function App() {
  const [allStats, setAllStats] = useState([])
  // state und setstate runterreichen oder über handlerfunktion?
  // in function ändern
  // services.js + (http service)
  const [isKdaForm, setIsKdaForm] = useState(true)

  async function getUserData() {
    const { data } = await axios.get(process.env.REACT_APP_API_URL + '/stats')
    setAllStats(data)
  }
  useEffect(() => {
    getUserData()
  }, [isKdaForm])
  return (
    <Container>
      {isKdaForm ? (
        <KdaForm
          onSubmit={setAllInfo}
          switchPage={setIsKdaForm}
          togglePage={isKdaForm}
        />
      ) : (
        <HistoryIndex
          switchPage={setIsKdaForm}
          togglePage={isKdaForm}
          gameStats={allStats}
        />
      )}
    </Container>
  )

  async function setAllInfo({ hero, kda, map, winOrLoss }) {
    await axios.post(process.env.REACT_APP_API_URL + '/stats', {
      id: Date.now(),
      kda,
      heroPicked: hero,
      mapPlayed: map,
      winOrLoss,
    })
    getUserData()
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
