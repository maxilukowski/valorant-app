import React, { useState } from 'react'
import KdaForm from './components/KDAForm/KdaForm'
import DisplayStats from './components/DisplayStats'

export default function App() {
  const [kda, setKda] = useState('')
  const [playedMap, setPlayedMap] = useState('')
  /*  const [allInfo, setAllInfo] = useState({
    kda: '',
    map: '',
  }) */
  return (
    <div>
      <h1>hallo welt</h1>
      <KdaForm onSubmit={setAllInfo} info={playedMap} />
      {/* @TODO 3 Would be great: Move right and display all form values */}
      {/* @TODO 4 Optional: Try to store data into json-server */}
      {/* @TODO 5 Optional: Try to read data from json-server */}
      <DisplayStats kda={kda} />
      <div>{playedMap}123</div>
    </div>
  )

  function setAllInfo({ kda, map }) {
    /* setAllInfo({ ...allInfo, kda, map }) */
    setKda(kda)
    setPlayedMap(map)
  }
}
