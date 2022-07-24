import {call, put, takeLatest} from 'redux-saga/effects';
import {getApiWithParam} from '../../utils/helpers/ApiRequest';
import Toast from '../../utils/helpers/Toast';

import {
  allSourcesFailure,
  allSourcesSuccess,
  fetchAllHeadlineNewsFailure,
  fetchAllHeadlineNewsSuccess,
} from '../reducers/NewsReducer';

// FETCH ALL SOURCES
export function* fetchAllSource(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };

  try {
    let response = yield call(
      getApiWithParam,
      'sources',
      action.payload,
      header,
    );
    if (response.data.status == 'ok') {
      yield put(allSourcesSuccess(response.data.sources));
    } else {
      yield put(allSourcesFailure(response.data));
      Toast(response.data.messages);
    }
  } catch (error) {
    console.log(error);
    yield put(allSourcesFailure(error));
  }
}
// FETCH ALL HEADLINE

export function* fetchAllHeadline(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };

  try {
    let response = yield call(
      getApiWithParam,
      'top-headlines',
      action.payload,
      header,
    );
    if (response.data.status == 'ok') {
      yield put(fetchAllHeadlineNewsSuccess(response.data.articles));
    } else {
      yield put(fetchAllHeadlineNewsFailure(response.data));
      Toast(response.data.messages);
    }
  } catch (error) {
    console.log(error);
    yield put(fetchAllHeadlineNewsFailure(error));
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('NewsReducer/allSourcesRequest', fetchAllSource);
  })(),
  (function* () {
    yield takeLatest(
      'NewsReducer/fetchAllHeadlineNewsRequest',
      fetchAllHeadline,
    );
  })(),
];

export default watchFunction;
