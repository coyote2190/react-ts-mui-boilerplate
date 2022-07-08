import { ReactElement } from 'react';

import { StyledButton } from '../StyledApp';
import logo from './logo.svg';

const App = (): ReactElement => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <StyledButton variant='contained'>Learn React</StyledButton>
    </header>
  </div>
);

export default App;
