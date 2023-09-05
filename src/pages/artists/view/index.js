import React, { useState } from 'react'
import { BodyHeader } from '../../art-works/view'
import ArtistTable from './artists-table'


const Artists = () => {
  const [search, setSearch] = useState('');
  
  return (
    <>
      <BodyHeader title="Artists" buttonName='Add Artists' buttonLink="/artists/add" search={search} setSearch={setSearch} />
      <ArtistTable search={search} />
    </>
  )
}

export default Artists