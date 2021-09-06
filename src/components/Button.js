import React from 'react';

import './Button.scss';

export default function Button({ label, icon, onPress, size, fill, type }) {
  let classes = 'Button';
  if (type) classes += ` Button-${type}`;
  if (size) classes += ` Button-${size}`;
  if (fill) classes += ' Button-fill';

  return (
    <a
        className={classes}
        style={{ lineHeight: size + 'px', borderRadius: (size / 2) + 'px' }}
        onClick={onPress}
        href='#'>
      { icon ? <i className={`fab fa-${icon} Button-icon`}></i> : null }
      {label}
    </a>
  );
}