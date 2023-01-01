import React from 'react';
import './App.css';
import SimpleGraph from './components/SimpleGraph';
import MoveableGraph from './components/MoveableGraph';
import EdgeAddableGraph from './components/EdgeAddableGraph';
import StyledGraph from './components/StyledGraph';

function App() {
  return (
    <div className="App" style={{width: "90%", height: "100%"}}>
      <SimpleGraph />
      <MoveableGraph />
      <EdgeAddableGraph />
      <StyledGraph />
    </div>
  );
}

export default App;
