import React from 'react'
import styled from 'styled-components'

const KDA = ['kill', 'death', 'assist']

export default ({ setFormData, formData }) => {
  return (
    <Container>
      {KDA.map((formItemName) => {
        return (
          <StyledLabel key={formItemName}>
            {formItemName}
            <input
              name={formItemName}
              type='number'
              value={formData[formItemName]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </StyledLabel>
        )
      })}
    </Container>
  )

  /*   function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  } */
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`
