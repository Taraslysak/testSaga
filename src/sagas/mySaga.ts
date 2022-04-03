import {all, put, takeEvery} from 'redux-saga/effects';
import {lotrApi} from '../api';
import {ActionType} from '../store/actions';

const TIMEOUT = 2000;

export function* mySaga() {
  const books = yield lotrApi.books();
  console.log(
    'THIS IS MYU VERY SAGA HELLO WORLD WITH BOOKS',
    JSON.stringify(books),
  );
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* asyncIncrement() {
  console.log('asyncIncrement. Before delay');

  yield delay(TIMEOUT);
  console.log('asyncIncrement. After delay');
  yield put({type: ActionType.INCREMENT});
}

function* asyncDecrement() {
  console.log('asyncDecrement. Before delay');

  yield delay(TIMEOUT);
  console.log('asyncDecrement. After delay');

  yield put({type: ActionType.DECREMENT});
}

function* watchIncrementAsync() {
  yield takeEvery(ActionType.ASYNC_INCREMENT, asyncIncrement);
}

function* watchDecrementAsync() {
  yield takeEvery(ActionType.ASYNC_DECREMENT, asyncDecrement);
}

export function* rootSaga() {
  yield all([mySaga(), watchIncrementAsync(), watchDecrementAsync()]);
}
