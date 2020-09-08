import React from 'react'
import styled from 'styled-components'

export default ({ setFormData, formData }) => {
  return (
    <Wrapper>
      Win or Loss
      <select
        value={formData.winOrLoss}
        onChange={(event) =>
          setFormData({ ...formData, winOrLoss: event.target.value })
        }
      >
        <option value='' disabled hidden>
          W or L
        </option>
        <option>Win</option>
        <option>Loss</option>
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
