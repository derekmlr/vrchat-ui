import React from 'react';
import SearchBar from './SearchBar';

import logoSvg from '../assets/logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <header className='Header'>
      <div className='Header-left'>
        <a className='Header-logo' href='#'>
          <img src={logoSvg} className='Header-logo-img' alt='VRChat' />
        </a>
      </div>
      <SearchBar />
    </header>
  );
}