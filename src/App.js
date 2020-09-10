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
  const [allStats, setAllStats] = useState([])

  const getUserData = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_URL + '/stats')
    console.log(data)
    setAllStats(data)
  }
  useEffect(() => {
    getUserData()
  }, [])
  return (
    <Container>
      <div>
        {allStats.map((userData) => {
          return <p key={userData.id}>{userData.id}</p>
        })}
      </div>
      <KdaForm onSubmit={setAllInfo} />
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
    const { data } = await axios.post(
      process.env.REACT_APP_API_URL + '/stats',
      {
        id: Date.now(),
        kda,
        heroPicked: hero,
        mapPlayed: map,
        winOrLoss,
      }
    )
    getUserData()
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
