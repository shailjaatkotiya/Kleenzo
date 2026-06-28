import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Kleenzo product details', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /kleenzo cleaning essentials/i })).toBeInTheDocument();
  expect(screen.getAllByText(/phenyl/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/floor cleaner/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/toilet cleaner/i).length).toBeGreaterThan(0);
});
