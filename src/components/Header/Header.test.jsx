import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import Header from './Header';

function renderHeader() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test('renders Booking logo', () => {
    renderHeader();

    expect(screen.getByText('Booking')).toBeInTheDocument();
  });

  test('renders navigation buttons', () => {
    renderHeader();

    expect(screen.getByRole('link', { name: 'HOME' })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'ABOUT' })).toBeInTheDocument();
  });

  test('navigation links have correct paths', () => {
    renderHeader();

    expect(screen.getByRole('link', { name: 'HOME' })).toHaveAttribute(
      'href',
      '/',
    );

    expect(screen.getByRole('link', { name: 'ABOUT' })).toHaveAttribute(
      'href',
      '/about',
    );
  });
});
