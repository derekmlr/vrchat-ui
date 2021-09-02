import React from 'react';

import FriendsListItem from './FriendsListItem';

import './FriendsList.scss';

export default function FriendsPanel({ data }) {
  return (
    <div className='friendsList'>
      { data.map((friend) => <FriendsListItem key={friend.id} data={friend} />) }
    </div>
  );
}