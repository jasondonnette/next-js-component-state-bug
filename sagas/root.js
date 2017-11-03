import { spawn } from 'redux-saga/effects';
import user from 'sagas/user';

export default function* root() {
  yield spawn(user);
}
