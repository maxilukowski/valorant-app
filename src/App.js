import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import DisplayStats from './components/DisplayStats'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'
import HistoryIndex from './components/HistoryPage/HistoryIndex'

export default function App() {
  const [kda, setKda] = useState('')
  const [playedMap, setPlayedMap] = useState('')
  const [playedHero, setPlayedHero] = useState('')
  const [winOrLoss, setWinOrLoss] = useState('')
  const [allStats, setAllStats] = useState([])
  // state und setstate runterreichen oder über handlerfunktion?
  const [togglePage, setTogglePage] = useState(true)

  async function getUserData() {
    const { data } = await axios.get(process.env.REACT_APP_API_URL + '/stats')
    setAllStats(data)
  }
  useEffect(() => {
    getUserData()
  }, [togglePage])
  return (
    <Container>
      {togglePage ? (
        <KdaForm
          onSubmit={setAllInfo}
          switchPage={setTogglePage}
          togglePage={togglePage}
        />
      ) : (
        <HistoryIndex
          switchPage={setTogglePage}
          togglePage={togglePage}
          gameStats={allStats}
        />
      )}

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
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
