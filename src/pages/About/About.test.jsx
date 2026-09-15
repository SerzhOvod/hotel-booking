import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import About from './About';

describe('About', () => {
  test('renders About heading', () => {
    render(<About />);

    expect(
      screen.getByRole('heading', {
        name: 'About',
      }),
    ).toBeInTheDocument();
  });

  test('renders page description', () => {
    render(<About />);

    expect(
      screen.getByText(/Find the perfect hotel for your stay/i),
    ).toBeInTheDocument();
  });

  test('renders technologies list', () => {
    render(<About />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
    expect(screen.getByText('Redux-Saga')).toBeInTheDocument();
    expect(screen.getByText('Axios')).toBeInTheDocument();
  });
});
