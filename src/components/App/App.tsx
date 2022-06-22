import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StyledButton } from '../StyledApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <StyledButton variant="contained">Learn React</StyledButton>
      </header>
    </div>
  );
}

export default App;
