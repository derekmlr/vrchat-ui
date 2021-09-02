import logo from './logo.svg';

import FriendsPanel from './components/FriendsPanel';

import './App.scss';
import LeftPanel from './components/LeftPanel';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <FriendsPanel />
    </div>
  );
}

export default App;
