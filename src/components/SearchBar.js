import React, { useState } from 'react';

import './SearchBar.scss';

export default function SearchBar() {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== '') alert(`Do a search for "${searchTerm}"`);
  }

  return (
    <form className='SearchBar' onSubmit={handleSubmit}>
      <input
          className='SearchBar-input'
          type='text'
          placeholder='Search for players, worlds, avatars, etc...'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)} />
      <button type='submit' className='SearchBar-submit'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  )
}