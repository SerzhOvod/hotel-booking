import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

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

function renderHotelCard() {
  return render(
    <MemoryRouter>
      <HotelCard hotel={hotel} />
    </MemoryRouter>,
  );
}

describe('HotelCard', () => {
  test('renders hotel name', () => {
    renderHotelCard();

    expect(
      screen.getByRole('heading', {
        name: 'The Plaza Hotel',
      }),
    ).toBeInTheDocument();
  });

  test('renders hotel address and city', () => {
    renderHotelCard();

    expect(screen.getByText('768 5th Ave')).toBeInTheDocument();

    expect(screen.getByText('New York, NY')).toBeInTheDocument();
  });

  test('renders View Hotel button', () => {
    renderHotelCard();

    expect(
      screen.getByRole('button', {
        name: 'VIEW HOTEL',
      }),
    ).toBeInTheDocument();
  });
});
