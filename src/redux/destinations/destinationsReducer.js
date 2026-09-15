const initialState = {
  items: [],
  loading: false,
  error: null,
};

export function destinationsReducer(state = initialState, action) {
  switch (action.type) {
    case 'DESTINATIONS_LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'DESTINATIONS_SUCCESS':
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };

    case 'DESTINATIONS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
