import { call, put, takeLatest } from 'redux-saga/effects';

import { getDestinations } from '../../services/destinationService';

function* fetchDestinationsSaga() {
  try {
    yield put({
      type: 'DESTINATIONS_LOADING',
    });

    const data = yield call(getDestinations);

    yield put({
      type: 'DESTINATIONS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    console.error('Failed to fetch destinations:', error);

    yield put({
      type: 'DESTINATIONS_ERROR',
      payload: 'Failed to load destinations',
    });
  }
}

export function* destinationsSaga() {
  yield takeLatest('DESTINATIONS_REQUEST', fetchDestinationsSaga);
}
