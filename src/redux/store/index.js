import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import NewsReducer from '../reducers/NewsReducer';
import RootSaga from '../sagas/RootSaga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
// const middleware = [logger];

export default configureStore({
  reducer: {
    NewsReducer: NewsReducer,
  },
  middleware,
});
sagaMiddleware.run(RootSaga);
