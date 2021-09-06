import React from 'react';

import './ListItemActionWorld.scss';

export default function ListItemActionWorld({ name, numOfFriends, isPrivate }) {
  return (
    <span className='ListItemActionWorld'>
      {isPrivate ? (
        <span className='ListItemActionWorld-private'>In a Private World</span>
      ) : (
        <>
          <span className='ListItemActionWorld-total'>
            <i className='fas fa-user-friends ListItemActionWorld-total-icon'></i>
            {numOfFriends}
          </span>
          <strong className='ListItemActionWorld-name'>{name}</strong>
        </>
      )}
    </span>
  );
}