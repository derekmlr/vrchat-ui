import React from 'react';

//import './FriendsListItem.scss';

export default function FriendsListItem({ data: friend }) {
  const statusIndicator = (status) => {
    let color;

    switch(status) {
      case 'online':
        color = 'green';
        break;
      case 'ask':
        color = 'orange';
        break;
      default:
        return;
    }

    return <span className='friendsListItem-status friendsListItem-status-${color}'>{status}</span>;
  }

  return (
    <li className='friendsListItem'>
      <img src={friend.image} className='friendsListItem-image' />
      <span className='friendsListItem-info'>
        { statusIndicator(friend.status) }
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