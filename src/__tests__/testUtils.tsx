import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import theme from '../theme';
import materialTheme from '../theme/material';

// import MaterialThemeProvider from '../providers/MaterialThemeProvider';
// import KiabiDesignSystemThemeProvider from '../providers/ThemeProvider';

export const renderWithThemeProvider = (ui: React.ReactElement): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <MuiThemeProvider
        theme={materialTheme(() => ({
          matches: false,
        }))}
      >
        <SCThemeProvider theme={theme}>{children}</SCThemeProvider>,
      </MuiThemeProvider>
    ),
  });
