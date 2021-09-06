import React from 'react';
import StatusIndicator from './StatusIndicator';

import './ListItem.scss';

export default function ListItem({ image, imageBorderColor, status, title, text, action }) {
  return (
    <li className='ListItem'>
      { image ? (
        <span
            className='ListItem-image'
            style={{ borderColor: imageBorderColor, backgroundImage: `url(${image})` }}
            alt={`Entry's image`} />
      ) : null }
      <span className='ListItem-info'>
        { status ? <StatusIndicator status={status} /> : null }
        <h3 className='ListItem-info-title'>{title}</h3>
        <p className='ListItem-info-text'>{text}</p>
        {action}
      </span>
    </li>
  );
}