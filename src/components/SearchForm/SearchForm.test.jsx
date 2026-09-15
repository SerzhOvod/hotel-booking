import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { describe, expect, test } from 'vitest';

import SearchForm from './SearchForm';

const destinationsReducer = (
  state = {
    items: [
      {
        id: 1,
        value: 70,
        label: 'Atlanta',
      },
      {
        id: 2,
        value: 149,
        label: 'Boston',
      },
    ],
    loading: false,
    error: null,
  },
) => state;

const hotelsReducer = (
  state = {
    items: [],
    loading: false,
    success: false,
    error: null,
  },
) => state;

function renderSearchForm() {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    </Provider>,
  );
}

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  hotels: hotelsReducer,
});

const store = createStore(rootReducer);

describe('SearchForm', () => {
  test('renders destination field', () => {
    renderSearchForm();

    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    renderSearchForm();

    expect(
      screen.getByRole('button', {
        name: /submit/i,
      }),
    ).toBeInTheDocument();
  });

  test('renders destination field with loaded destinations', () => {
    renderSearchForm();

    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
  });
});
