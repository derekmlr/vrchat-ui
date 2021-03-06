import React from 'react';

import './LeftPanelMenuItem.scss';
import LeftPanelMenuItemNewBg from '../assets/LeftPanelMenuItem-newBg.svg';

export default function LeftPanelMenuItem({ name, newCount, isActive, setActive }) {
  let formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  let classes = 'LeftPanelMenuItem';
  if (isActive === name) classes += ' LeftPanelMenuItem-active';

  const handleClick = () => {
    setActive(name);
  }

  return (
    <a
        className={classes}
        href='#'
        onClick={handleClick}>
      { /* Since icon graphics need more work, they're skipped in this. */ }
      <span className='LeftPanelMenuItem-icon'></span>
      <span className='LeftPanelMenuItem-title'>{formattedName}</span>
      { newCount > 0 ? (
        <span
            className='LeftPanelMenuItem-new'
            style={{ backgroundImage: `url(${LeftPanelMenuItemNewBg})` }}>
          <span className='LeftPanelMenuItem-new-count'>
            {newCount > 9 ? '9+' : newCount }
          </span>
        </span>
      ) : null }
    </a>
  );
}