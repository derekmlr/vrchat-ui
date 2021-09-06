import React from 'react';

import './List.scss';

export default function List({ data, type='ordered', renderItem, spaced }) {

  let classes = 'List';
  if (spaced) classes += ' List-spaced';

  const generateItems = () => {
    return data.map((item, index) => renderItem(item, index));
  };

  if (type === 'ul') {
    return (
      <ul className={classes}>
        {generateItems()}
      </ul>
    );
  }

  return (
    <ol className={classes}>
      {generateItems()}
    </ol>
  );
}