import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
  width: 400px;
  && {
    ${({ theme }) => {
      return `
      color: ${theme.colors.white}`;
    }}
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <StyledButton variant="contained">Learn React</StyledButton>
      </header>
    </div>
  );
}

export default App;
