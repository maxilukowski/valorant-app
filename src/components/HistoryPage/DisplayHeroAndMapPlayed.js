import React from 'react'
import DisplayMapPlayedAmount from './DisplayMapPlayedAmount'
import DisplayHeroPlayedAmount from './DisplayHeroPlayedAmount'
import styled from 'styled-components'

export default ({ gameStatsCounted: { heroPicked, mapPlayed } }) => {
  return (
    <SplitDisplay>
      <div>
        <DisplayHeroPlayedAmount heroes={heroPicked} />
      </div>
      <div>
        <DisplayMapPlayedAmount maps={mapPlayed} />
      </div>
    </SplitDisplay>
  )
}

const SplitDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`
