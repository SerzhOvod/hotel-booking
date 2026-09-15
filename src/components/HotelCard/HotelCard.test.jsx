import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import HotelCard from './HotelCard';

const hotel = {
  id: 1,
  name: 'The Plaza Hotel',
  address: '768 5th Ave',
  city: 'New York',
  state: 'NY',
  hotel_rating: 5,
  phone_number: '+1 212-759-3000',
};

describe('HotelCard', () => {
  test('renders hotel name', () => {
    render(<HotelCard hotel={hotel} />);

    expect(
      screen.getByRole('heading', {
        name: 'The Plaza Hotel',
      }),
    ).toBeInTheDocument();
  });

  test('renders hotel address and city', () => {
    render(<HotelCard hotel={hotel} />);

    expect(screen.getByText('768 5th Ave')).toBeInTheDocument();

    expect(screen.getByText('New York, NY')).toBeInTheDocument();
  });

  test('renders View Hotel button', () => {
    render(<HotelCard hotel={hotel} />);

    expect(
      screen.getByRole('button', {
        name: 'VIEW HOTEL',
      }),
    ).toBeInTheDocument();
  });
});
