const initialState = {
  items: [],
  search: null,
  loading: false,
  success: false,
  error: null,
};

export function hotelsReducer(state = initialState, action) {
  switch (action.type) {
    case 'HOTELS_LOADING':
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };

    case 'HOTELS_SUCCESS':
      return {
        ...state,
        items: action.payload.hotels,
        search: action.payload.search,
        loading: false,
        success: true,
        error: null,
      };

    case 'HOTELS_ERROR':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
