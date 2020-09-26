import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import HistoryIndex from './components/HistoryPage/HistoryIndex'
import { Switch, Route, Redirect } from 'react-router-dom'

export default function App() {
  const [allStats, setAllStats] = useState([])
  // services.js + (http service)
  const [isKdaForm, setIsKdaForm] = useState(true)

  /* async function getUserData() {
    const { data } = await axios.get(process.env.REACT_APP_API_URL + '/stats')
    setAllStats(data)
  } */
  // with FETCH
  function getUserData() {
    fetch(process.env.REACT_APP_API_URL + '/stats')
      .then((response) => response.json())
      .then((data) => setAllStats(data))
  }
  /* async function getUserData() {
    const response = await fetch(process.env.REACT_APP_API_URL + '/stats')
    const data = await response.json()
    setAllStats(data)
  } */

  useEffect(() => {
    getUserData()
  }, [isKdaForm])

  return (
    <Container>
      <Redirect exact from='/' to='Home' />
      {isKdaForm ? (
        <Switch>
          <Route path='/'>
            <KdaForm onSubmit={setAllInfo} togglePage={togglePages} />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path='/History'>
            <HistoryIndex togglePage={togglePages} gameStats={allStats} />
          </Route>
        </Switch>
      )}
    </Container>
  )

  async function setAllInfo({ hero, kda, map, winOrLoss }) {
    console.log(hero)
    const response = await fetch(process.env.REACT_APP_API_URL + '/stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Date.now(),
        kda,
        heroPicked: hero,
        mapPlayed: map,
        winOrLoss,
      }),
    })
    return response.json()
  }

  /*   async function setAllInfo({ hero, kda, map, winOrLoss }) {
    await axios.post(process.env.REACT_APP_API_URL + '/stats', {
      id: Date.now(),
      kda,
      heroPicked: hero,
      mapPlayed: map,
      winOrLoss,
    })
    getUserData()
  } */

  function togglePages() {
    setIsKdaForm(!isKdaForm)
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
