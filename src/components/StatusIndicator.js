import React from 'react';

import './StatusIndicator.scss';

export default function StatusIndicator({ status, size = 14 }) {
  size = size + 'px';
  return (
    <span
        className={`StatusIndicator StatusIndicator-${status}`}
        style={{
          borderRadius: size,
          height: size,
          width: size,
        }}>
      {status}
    </span>
  );
}