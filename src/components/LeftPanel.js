import React, { useEffect, useState } from 'react';
import Button from './Button';
import LeftPanelMenuItem from './LeftPanelMenuItem';
import StatusIndicator from './StatusIndicator';

import './LeftPanel.scss';

export default function LeftPanel() {
  const [ activeMenuItem, setActiveMenuItem ] = useState('welcome');
  const [ messagesCount, setMessagesCount ] = useState(0);

  useEffect(() => {
    // This would be some api call.
    setMessagesCount(4);
  }, [])

  return (
    <div className='LeftPanel'>

      <div className='LeftPanel-user'>
        <span
            className='LeftPanel-user-icon'
            style={{ backgroundImage: 'url(https://api.vrchat.cloud/api/1/image/file_c41de918-50bd-4932-88c8-50571048af85/2/256)' }} />
        <span className='LeftPanel-user-info'>
          <strong className='LeftPanel-user-name'>
            <StatusIndicator status='online' />
            derekmlr
          </strong>
          <a className='LeftPanel-user-action' href='/settings'>Log out</a>
        </span>
      </div>

      <nav className='LeftPanel-menu'>
        { /* The isActive and setActive could probably be handled better. */ }
        <LeftPanelMenuItem
            name='welcome'
            isActive={activeMenuItem}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='friends'
            isActive={activeMenuItem}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='worlds'
            isActive={activeMenuItem}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='avatars'
            isActive={activeMenuItem}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='messages'
            newCount={messagesCount}
            isActive={activeMenuItem}
            setActive={setActiveMenuItem} />
        <LeftPanelMenuItem
            name='settings'
            isActive={activeMenuItem}
            setActive={setActiveMenuItem} />
      </nav>

      <div className='LeftPanel-bottomActions'>
        <Button icon='unity' label='Download SDK' type='primary' fill size='lg' />
      </div>
    </div>
  );
}