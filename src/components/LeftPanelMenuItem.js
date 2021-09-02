import React from 'react';

import './LeftPanelMenuItem.scss';
import LeftPanelMenuItemNewBg from '../assets/LeftPanelMenuItem-newBg.svg';

export default function LeftPanelMenuItem({ name, newCount, isActive, setActive }) {
  let formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  const handleClick = () => {
    setActive(name);
  }

  return (
    <a
        className={`LeftPanelMenuItem ${isActive ? 'LeftPanelMenuItem-active' : ''}`}
        href='#'
        onClick={handleClick}>
      { /* Since icon graphics need more work, they're skipped in this. */ }
      <span class='LeftPanelMenuItem-icon LeftPanelMenuItem-icon'></span>
      <span class='LeftPanelMenuItem-title'>{formattedName}</span>
      { newCount > 0 ? (
        <span
            class='LeftPanelMenuItem-new'
            style={{ backgroundImage: `url(${LeftPanelMenuItemNewBg})` }}>
          <span class='LeftPanelMenuItem-new-count'>
            {newCount > 9 ? '9+' : newCount }
          </span>
        </span>
      ) : null }
    </a>
  );
}