import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import DisplayStats from './components/DisplayStats'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
//import StatsIndex from './components/StatsPage/StatsIndex'

export default function App() {
  const [kda, setKda] = useState('')
  const [playedMap, setPlayedMap] = useState('')
  const [playedHero, setPlayedHero] = useState('')
  const [winOrLoss, setWinOrLoss] = useState('')
  const [allStats, setAllStats] = useState([])
  const [togglePage, setTogglePage] = useState(true)
  console.log(togglePage)

  async function getUserData() {
    const { data } = await axios.get(process.env.REACT_APP_API_URL + '/stats')
    setAllStats(data)
  }
  useEffect(() => {
    getUserData()
  }, [])
  return (
    <Container>
      <KdaForm onSubmit={setAllInfo} switchPage={switchPage} />
      <DisplayStats
        kda={kda}
        map={playedMap}
        hero={playedHero}
        winOrLoss={winOrLoss}
      />
    </Container>
  )

  async function setAllInfo({ hero, kda, map, winOrLoss }) {
    setPlayedHero(hero)
    setKda(kda)
    setPlayedMap(map)
    setWinOrLoss(winOrLoss)
    //warum geht es nicht mit dem state? soll awaiten!
    await axios.post(process.env.REACT_APP_API_URL + '/stats', {
      id: Date.now(),
      kda,
      heroPicked: hero,
      mapPlayed: map,
      winOrLoss,
    })
    getUserData()
  }
  function switchPage() {
    setTogglePage(!togglePage)
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
