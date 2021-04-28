import { call, put } from "redux-saga/effects";
import { requestGetToDo, requestPostToDo } from "../requests/toDo";

export function* handleGetToDo() {
  try {
    const response = yield call(requestGetToDo);
    if (response)
      yield put({ type: "SET_TODO", payload: JSON.parse(response) });
  } catch (error) {
    console.log(error);
  }
}

export function* handlePostToDo(action) {
  try {
    const response = yield call(requestPostToDo, action.payload);
    if (response)
      yield put({ type: "POST_TODO", payload: JSON.parse(response) });
  } catch (error) {
    console.log(error);
  }
}
