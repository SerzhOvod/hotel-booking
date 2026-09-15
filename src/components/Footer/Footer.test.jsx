import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Footer from './Footer';

describe('Footer', () => {
  test('renders Hotel Booking title', () => {
    render(<Footer />);

    expect(screen.getByText('Hotel Booking')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Footer />);

    expect(screen.getByText(/info@hotelbooking\.com/i)).toBeInTheDocument();

    expect(screen.getByText(/1 800 123 4567/i)).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<Footer />);

    expect(
      screen.getByText('© 2026 Hotel Booking. All rights reserved.'),
    ).toBeInTheDocument();
  });
});
