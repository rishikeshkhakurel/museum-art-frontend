import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
width: 100%;
margin-bottom: 16px;

h3{
  margin: 8px 0;
}
input{
  width: calc(100% - 24px);
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
`;

const Input = ({ placeholder, value, onChange, onBlur, type, error,id, name }) => {

  return (
    <StyledInput>
      <h3>{name}</h3>
      <input id={id} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} type={type} />
      <p className='error'>{error}</p>
    </StyledInput>
  );
};

export default Input;