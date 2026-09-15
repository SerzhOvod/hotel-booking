import { combineReducers } from 'redux';

import { destinationsReducer } from './destinations/destinationsReducer';
import { hotelsReducer } from './hotels/hotelsReducer';

export const rootReducer = combineReducers({
  destinations: destinationsReducer,
  hotels: hotelsReducer,
});
