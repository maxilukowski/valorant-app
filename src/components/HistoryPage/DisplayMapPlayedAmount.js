import React from 'react'

export default ({ playedMapAmount }) => {
  const orderedMapList = {}
  Object.keys(playedMapAmount)
    .sort()
    .forEach((key) => (orderedMapList[key] = playedMapAmount[key]))
  return Object.entries(orderedMapList).map(([map, amount]) => {
    return (
      <div key={map}>
        You played {map} {amount} times
      </div>
    )
  })
}
