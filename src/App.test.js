import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Programming all the time!!!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders2 learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Programming all the time!!!/i);
  expect(linkElement).toBeInTheDocument();
});
