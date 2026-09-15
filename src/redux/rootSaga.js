import { all } from 'redux-saga/effects';

import { destinationsSaga } from './destinations/destinationsSaga';
import { hotelsSaga } from './hotels/hotelsSaga';

export function* rootSaga() {
  yield all([destinationsSaga(), hotelsSaga()]);
}
