import React from 'react'

export default ({ gameStats }) => {
  const lastFiveGames = gameStats.slice(-5)

  return (
    <>
      <div>Recent games</div>
      {lastFiveGames.map((game) => {
        return (
          <div key={game.id}>
            <div>kda :{game.kda}</div>
            <div>hero:{game.heroPicked}</div>
            <div>map:{game.mapPlayed}</div>
          </div>
        )
      })}
    </>
  )
}
