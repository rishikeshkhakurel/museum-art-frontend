import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai";

const SearchStyled = styled.div`
border: 1px solid #ccc;
border-radius: 99px;
background: var(--white);
display:flex;
align-items:center;
padding: 0 12px;
width:300px;

    #search{
        font-size: 24px;
    }
    input{
        border: 0;
        padding: 8px;
        background:transparent;
        width: calc(100% - 24px);
        outline: 0;
        font-size:16px;
    }
`

const Search = ( {value, onChange} ) => {
    const handleChange = (event) => {
        const value = event.target.value;
        onChange(event, value);
      };
    return (
        <SearchStyled>
            <AiOutlineSearch className='icon' id='search' />
            <input placeholder='Search' value={value} onChange={handleChange} />
        </SearchStyled>
    )
}

export default Search