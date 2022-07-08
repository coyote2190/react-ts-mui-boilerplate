import { renderWithThemeProvider } from '../../__tests__/testUtils';
import App from './App';

test('renders learn react link', () => {
  const container = renderWithThemeProvider(<App />);
  const button = container.getByRole('button');
  expect(button).toHaveTextContent('Learn React');
});
