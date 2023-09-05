import React from 'react'
import styled from 'styled-components'

const SelectStyled = styled.div`
  h3{
    margin: 8px 0;
  }
  select{
    background:transparent;
    width: calc(100%);
    padding: 12px ;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: 0;
    font-size:1rem;
  }
  
  .error{
    color: var(--red-500);
    margin: 12px 0;
  }
`

const Select = ({ name, id, options, error, onChange, onBlur, value }) => {
  return (
    <SelectStyled >
      <h3>{name}</h3>
      <select name={name} id={id} onChange={onChange} onBlur={onBlur} value={value}>
        <option value="none" selected disabled hidden>Select an Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <p className='error'>{error}</p>
    </SelectStyled>
  )
}

export default Select