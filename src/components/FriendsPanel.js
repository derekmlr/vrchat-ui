import React, { useEffect, useState } from 'react';
import friendsData from '../data/friends';
import FriendsList from './FriendsList';

//import './friendspanel.scss';

export default function FriendsPanel() {
  const [ friends, setFriends ] = useState(null);

  useEffect(() => {
    setFriends(friendsData);
  }, []);

  return (
    <aside className='friendsPanel'>
      <header className='friendsPanel-header'>
        <h2>Friends</h2>
        <span className=''></span>
      </header>
      <div className=''>
        { friends ? (
          <FriendsList data={friends} />
        ) : 'loading...' }
      </div>
    </aside>
  );
}