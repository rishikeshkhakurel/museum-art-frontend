import React, { useState } from 'react'
import ArtWorkStyle, { BodyHeaderStyle } from './art-work-style'
import Search from '../../../component/search';
import { Link } from 'react-router-dom';
import Button from '../../../component/button';
import ArtWorkTable from './art-work-table';


export const BodyHeader = (props) => {

  const handleSearch = (event) => {
    props?.setSearch(event.target.value);
  };
  return (
    <BodyHeaderStyle>
      <h1 className='title'>
        {props?.title}
      </h1>
      <div className="search-link-container">
        <div>
          <Search value={props?.search} onChange={handleSearch} />
        </div>
        <div>
          <Link to={props?.buttonLink}><Button color="primary">{props?.buttonName}</Button></Link>
        </div>
      </div>

    </BodyHeaderStyle>
  )
}

const ArtWorks = () => {
  const [search, setSearch] = useState('');
  return (
    <ArtWorkStyle>
      <BodyHeader title="Art Works" buttonName='Add ArtWork' buttonLink="/artwork/add" search={search} setSearch={setSearch} />
      <ArtWorkTable search={search} />
    </ArtWorkStyle>
  )
}

export default ArtWorks