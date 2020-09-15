import React from 'react'
import DisplayMapPlayedAmount from './DisplayMapPlayedAmount'
import DisplayHeroPlayedAmount from './DisplayHeroPlayedAmount'
import styled from 'styled-components'

export default ({ playedHeroAmount, playedMapAmount }) => {
  return (
    <SplitDisplay>
      <div>
        <DisplayHeroPlayedAmount playedHeroAmount={playedHeroAmount} />
      </div>
      <div>
        <DisplayMapPlayedAmount playedMapAmount={playedMapAmount} />
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
