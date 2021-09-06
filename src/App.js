import React from 'react';

import LeftPanel from './components/LeftPanel';
import SocialPanel from './components/SocialPanel';

import './App.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftPanel />
      <div className='App-content'>
      </div>
      <SocialPanel />
    </div>
  );
}

export default App;
