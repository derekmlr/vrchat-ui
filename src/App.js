import React from 'react';

import FriendsPanel from './components/FriendsPanel';
import LeftPanel from './components/LeftPanel';

import './App.scss';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <FriendsPanel />
    </div>
  );
}

export default App;
