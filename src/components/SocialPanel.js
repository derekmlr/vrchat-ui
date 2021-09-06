import React, { useEffect, useState } from 'react';
import friendsData from '../data/friends';
import List from './List';
import ListItem from './ListItem';
import ListItemActionWorld from './ListItemActionWorld';

import './SocialPanel.scss';

export default function SocialPanel() {
  const [ friends, setFriends ] = useState(null);

  useEffect(() => {
    setFriends(friendsData);
  }, []);

  const renderAction = (world) => {
    return (
      <ListItemActionWorld
          name={world?.name}
          numOfFriends={world?.totalFriends}
          isPrivate={!world} />
    );
  };
// { data.status !== 'offline' && data.inWorld ?
  return (
    <aside className='SocialPanel'>
      <header className='SocialPanel-header'>
        <h2 className='SocialPanel-header-title'>Online friends</h2>
        <span className='SocialPanel-header-actions'>
          <i class="fas fa-sliders-h"></i>
        </span>
      </header>
      <div className='SocialPanel-scroller'>
          { friends ? (
            <List
                data={friends}
                renderItem={(friend, index) => (
                  <ListItem
                      key={index}
                      status={friend.status}
                      image={friend.avatarPic}
                      title={friend.name}
                      text={friend.update}
                      action={renderAction(friend.in_world)} />
                )} />
          ) : 'loading...' }
      </div>
    </aside>
  );
}