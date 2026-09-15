import { call, put, takeLatest } from 'redux-saga/effects';

import { searchHotels } from '../../services/hotelService';

function* searchHotelsSaga(action) {
  try {
    const data = yield call(searchHotels, action.payload);

    yield put({
      type: 'HOTELS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    console.error('Failed to search hotels:', error);

    yield put({
      type: 'HOTELS_ERROR',
      payload: 'Failed to load hotels',
    });
  }
}

export function* hotelsSaga() {
  yield takeLatest('SEARCH_HOTELS_REQUEST', searchHotelsSaga);
}
