import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes, Todo, updateTodos } from '../actions';

const url = 'https://jsonplaceholder.typicode.com/todos';

function* fetchTodos() {
  const res = yield fetch(url);
  const data: Todo[] = yield res.json();
  yield put(updateTodos(data));
}

export function* rootSaga() {
  yield takeEvery(ActionTypes.FETCH_TODOS, fetchTodos);
}
