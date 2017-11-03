import { put, takeEvery } from 'redux-saga/effects';

export function* tryLogout() {
  yield put({ type: 'LOGOUT_SUCCESS' });
}

export default function* userSaga() {
  yield takeEvery('LOGOUT_REQUESTED', tryLogout);
}
