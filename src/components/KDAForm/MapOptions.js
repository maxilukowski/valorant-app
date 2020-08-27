import React from 'react'
import styled from 'styled-components'

const mapList = ['Split', 'Bind', 'Haven', 'Ascent']

export default () => {
  return (
    <Wrapper>
      map played
      <select>
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
