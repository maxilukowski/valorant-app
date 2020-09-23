import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import HistoryIndex from './components/HistoryPage/HistoryIndex'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'

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
      <Redirect exact from='/' to='Home' />
      <Header togglePage={togglePages} text='History' />
      <Switch>
        <Route path='/Home'>
          <KdaForm onSubmit={setAllInfo} togglePage={togglePages} />
        </Route>
        <Route path='/History'>
          <HistoryIndex gameStats={allStats} />
        </Route>
      </Switch>
    </Container>
  )

  async function setAllInfo({ hero, kda, map, winOrLoss }) {
    await axios({
      method: 'post',
      url: process.env.REACT_APP_API_URL + '/stats',
      data: {
        id: Date.now(),
        kda,
        heroPicked: hero,
        mapPlayed: map,
        winOrLoss,
      },
      headers: { 'X-developerName': 'max' },
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
  font-size: 1.5rem;
`
