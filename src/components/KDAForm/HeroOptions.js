import React from 'react'
import styled from 'styled-components'

const heroList = ['Sage', 'Sova', 'Pheonix', 'Omen']

export default ({ setFormData, formData }) => {
  return (
    <Wrapper>
      hero played
      <select
        value={formData.hero}
        onChange={(event) =>
          setFormData({ ...formData, hero: event.target.value })
        }
      >
        <option value='' selected disabled hidden>
          Choose here
        </option>
        {heroList.map((heroName) => {
          return <option key={heroName}>{heroName}</option>
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
