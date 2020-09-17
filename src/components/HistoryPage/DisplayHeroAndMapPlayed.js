import React from 'react'
import DisplayMapPlayedAmount from './DisplayMapPlayedAmount'
import DisplayHeroPlayedAmount from './DisplayHeroPlayedAmount'
import styled from 'styled-components'

export default ({ gameStatsCounted: { heroes, maps } }) => {
  return (
    <SplitDisplay>
      <div>
        <DisplayHeroPlayedAmount heroes={heroes} />
      </div>
      <div>
        <DisplayMapPlayedAmount maps={maps} />
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
