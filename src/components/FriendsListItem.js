import React from 'react';

export default function FriendsListItem({ data: friend }) {
  return (
    <li className='friendsListItem'>
      <img src={friend.image} className='friendsListItem-image' alt={`${friend.name}'s icon`} />
      <span className='friendsListItem-info'>
        { friend.status }
        <strong className='friendsListItem-info-name'>{friend.name}</strong>
        { friend.update ?
          <span className='friendsListItem-info-name'>{friend.update}</span>
        : null }
        { friend.status !== 'offline' && friend.inWorld ? (
          <span className='friendsListItem-info-world'>
            <strong className='friendsListItem-info-world'>{friend.inWorld.name}</strong>
          </span>
        ) : null }
      </span>
    </li>
  );
}