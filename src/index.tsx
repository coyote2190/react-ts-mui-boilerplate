import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import './index.css';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import materialTheme from './theme/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MuiThemeProvider
      theme={materialTheme(() => ({
        matches: true,
      }))}
    >
      <SCThemeProvider theme={theme}>
        <App />
      </SCThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
