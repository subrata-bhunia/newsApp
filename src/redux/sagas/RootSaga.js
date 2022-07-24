import {all} from 'redux-saga/effects';
import NewSaga from './NewSaga';

const combinedSaga = [...NewSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}
