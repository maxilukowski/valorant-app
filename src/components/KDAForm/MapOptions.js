import React from 'react'
import styled from 'styled-components'

const mapList = ['Split', 'Bind', 'Haven', 'Ascent']

export default ({ updateData }) => {
  return (
    <Wrapper>
      map played
      <select onChange={(event) => updateData(event.target.value)}>
        {mapList.map((mapName) => {
          return <option key={mapName}>{mapName}</option>
        })}
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
