import { call, put } from "redux-saga/effects";
import { setToDo, postToDo } from "../../reducers/toDo";
import { requestGetToDo, requestPostToDo } from "../requests/toDo";

export function* handleGetToDo(action) {
  try {
    const response = yield call(requestGetToDo);
    const { data } = response;
    yield put(setToDo(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handlePostToDo(action) {
  try {
    const response = yield call(requestPostToDo, action.payload);
    const { data } = response;

    yield put(postToDo(data));
  } catch (error) {
    console.log(error);
  }
}
