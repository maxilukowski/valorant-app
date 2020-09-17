import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import HistoryIndex from './components/HistoryPage/HistoryIndex'

export default function App() {
  const [allStats, setAllStats] = useState([])
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
        <KdaForm onSubmit={setAllInfo} togglePage={togglePages} />
      ) : (
        <HistoryIndex togglePage={togglePages} gameStats={allStats} />
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

  function togglePages() {
    setIsKdaForm(!isKdaForm)
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
