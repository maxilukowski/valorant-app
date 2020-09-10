import React from 'react'

export default ({ switchPage, gameStats }) => {
  let sum = 0
  gameStats.forEach((game) => {
    sum += game.kda
    return sum
  })
  const avgKda = sum / gameStats.length

  return (
    <>
      <div>HistoryPage matches played{gameStats.length}</div>
      <div>your avg KDA = {avgKda}</div>
      <button onClick={() => switchPage()}>switch </button>
    </>
  )
}
