import React from 'react'
import styled from 'styled-components'

const mapList = ['Split', 'Bind', 'Haven', 'Ascent']

export default ({ setFormData, formData }) => {
  return (
    <StyledLabel>
      map played
      <select
        value={formData.map}
        onChange={(event) =>
          setFormData({ ...formData, map: event.target.value })
        }
      >
        {mapList.map((mapName) => {
          return <option key={mapName}>{mapName}</option>
        })}
      </select>
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
