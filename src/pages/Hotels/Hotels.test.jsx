import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { useSelector } from 'react-redux';

import Hotels from './Hotels';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}));

vi.mock('../../components/HotelCard/HotelCard', () => ({
  default: ({ hotel }) => <div>{hotel.name}</div>,
}));

const hotels = [
  {
    id: 1,
    name: 'Grand Hotel',
    city: 'Kyiv',
    hotel_rating: 5,
    amenities: ['Wi-Fi', 'Pool'],
    price: 200,
  },
  {
    id: 2,
    name: 'Budget Hotel',
    city: 'Lviv',
    hotel_rating: 3,
    amenities: ['Wi-Fi'],
    price: 80,
  },
  {
    id: 3,
    name: 'Royal Hotel',
    city: 'Odesa',
    hotel_rating: 4,
    amenities: ['Pool'],
    price: 150,
  },
];

const mockState = {
  hotels: {
    items: hotels,
    search: null,
    loading: false,
    error: null,
  },
};

function renderHotels() {
  useSelector.mockImplementation(selector => selector(mockState));

  return render(<Hotels />);
}

describe('Hotels', () => {
  test('renders Hotels title', () => {
    renderHotels();

    expect(
      screen.getByRole('heading', {
        name: 'Hotels',
      }),
    ).toBeInTheDocument();
  });

  test('renders hotels list', () => {
    renderHotels();

    expect(screen.getByText('Grand Hotel')).toBeInTheDocument();
    expect(screen.getByText('Budget Hotel')).toBeInTheDocument();
    expect(screen.getByText('Royal Hotel')).toBeInTheDocument();
  });

  test('filters hotels by search text', async () => {
    const user = userEvent.setup();

    renderHotels();

    const searchInput = screen.getByLabelText('Search hotel or city');

    await user.type(searchInput, 'Grand');

    expect(screen.getByText('Grand Hotel')).toBeInTheDocument();
    expect(screen.queryByText('Budget Hotel')).not.toBeInTheDocument();
    expect(screen.queryByText('Royal Hotel')).not.toBeInTheDocument();
  });

  test('filters hotels by minimum rating', async () => {
    const user = userEvent.setup();

    renderHotels();

    const ratingSelect = screen.getByRole('combobox', {
      name: 'Minimum rating',
    });

    await user.click(ratingSelect);

    const option = await screen.findByRole('option', {
      name: '4+ stars',
    });

    await user.click(option);

    expect(screen.getByText('Grand Hotel')).toBeInTheDocument();
    expect(screen.getByText('Royal Hotel')).toBeInTheDocument();
    expect(screen.queryByText('Budget Hotel')).not.toBeInTheDocument();
  });

  test('sorts hotels by rating', async () => {
    const user = userEvent.setup();

    renderHotels();

    const sortSelect = screen.getByRole('combobox', {
      name: 'Sort by',
    });

    await user.click(sortSelect);

    const option = await screen.findByRole('option', {
      name: 'Rating: high to low',
    });

    await user.click(option);

    const hotelNames = screen
      .getAllByText(/^(Grand Hotel|Royal Hotel|Budget Hotel)$/)
      .map(element => element.textContent);

    expect(hotelNames).toEqual(['Grand Hotel', 'Royal Hotel', 'Budget Hotel']);
  });

  test('resets filters', async () => {
    const user = userEvent.setup();

    renderHotels();

    const searchInput = screen.getByLabelText('Search hotel or city');

    await user.type(searchInput, 'Grand');

    expect(screen.getByText('Grand Hotel')).toBeInTheDocument();
    expect(screen.queryByText('Budget Hotel')).not.toBeInTheDocument();
    expect(screen.queryByText('Royal Hotel')).not.toBeInTheDocument();

    await user.click(
      screen.getByRole('button', {
        name: 'Reset filters',
      }),
    );

    expect(screen.getByText('Grand Hotel')).toBeInTheDocument();
    expect(screen.getByText('Budget Hotel')).toBeInTheDocument();
    expect(screen.getByText('Royal Hotel')).toBeInTheDocument();
  });
});
