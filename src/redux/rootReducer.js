import { combineReducers } from 'redux';

import { destinationsReducer } from './destinationsReducer';

export const rootReducer = combineReducers({
  destinations: destinationsReducer,
});
