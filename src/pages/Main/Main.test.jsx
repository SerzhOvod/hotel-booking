import { legacy_createStore as createStore, combineReducers } from 'redux';
import { destinationsReducer } from '../../redux/destinations/destinationsReducer';
import { hotelsReducer } from '../../redux/hotels/hotelsReducer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import Main from './Main';

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  hotels: hotelsReducer,
});

const initialState = {
  destinations: {
    items: [
      { id: 1, value: 'atlanta', label: 'Atlanta' },
      { id: 2, value: 'boston', label: 'Boston' },
    ],
    loading: false,
    error: null,
  },
  hotels: {
    items: [],
    loading: false,
    success: false,
    error: null,
  },
};

const store = createStore(rootReducer, initialState);

function renderMain() {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    </Provider>,
  );
}

describe('Main', () => {
  test('renders main heading', () => {
    renderMain();

    expect(
      screen.getByRole('heading', {
        name: /Travel With Booking/i,
      }),
    ).toBeInTheDocument();
  });

  test('renders description text', () => {
    renderMain();

    expect(
      screen.getByText(/Find the perfect place to stay for your next trip/i),
    ).toBeInTheDocument();
  });

  test('renders submit form', () => {
    renderMain();

    expect(
      screen.getByRole('button', {
        name: /submit/i,
      }),
    ).toBeInTheDocument();
  });
});
