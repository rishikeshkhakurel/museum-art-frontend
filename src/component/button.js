import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick, disabled, children, color, type }) => {
  const StyledButton = styled.button`
    background: ${color==='primary' && 'var(--primary-500)'} ${color==='tertary' && 'var(--gray-100)'};
    color: ${color==='primary' && 'var(--white)'} ${color==='tertary' && 'var(--gray-400)'};
    padding: 12px;
    border-radius: 4px;
    font-size: 1rem;
    border: 0;
  `
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type} className='body-regular extra-bold'>
      {children}
    </StyledButton>
  );
};

export default Button;