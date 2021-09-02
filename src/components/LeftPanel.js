import React, { useEffect, useState } from 'react';
import LeftPanelMenuItem from './LeftPanelMenuItem';

import './LeftPanel.scss';

export default function LeftPanel() {
  const [ activeMenuItem, setActiveMenuItem ] = useState('');
  const [ messagesCount, setMessagesCount ] = useState(0);

  useEffect(() => {
    // This would be some api call.
    setMessagesCount(4);
  }, [])

  return (
    <div className='LeftPanel'>

      <div className='LeftPanel-user'>
        <span className='LeftPanel-user-icon' style={{ backgroundImage: 'url()' }}></span>
        <span className='LeftPanel-user-info'>
          <strong className='LeftPanel-user-name'>
            <span className='indicator indicator-online'>Online</span>
            kayzewolf
          </strong>
          <a href='/settings'>Log out</a>
        </span>
      </div>

      <nav className='LeftPanel-menu'>
        <LeftPanelMenuItem
            name='welcome'
            isActive={activeMenuItem === 'welcome'}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='friends'
            isActive={activeMenuItem === 'friends'}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='worlds'
            isActive={activeMenuItem === 'worlds'}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='avatars'
            isActive={activeMenuItem === 'avatars'}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='messages'
            newCount={messagesCount}
            isActive={activeMenuItem === 'messages'}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='settings'
            isActive={activeMenuItem === 'settings'}
            setActive={setActiveMenuItem} />
      </nav>
    </div>
  );
}