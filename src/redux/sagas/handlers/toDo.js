import { call, put } from "redux-saga/effects";
import { setToDo } from "../../reducers/toDo";
import { requestGetToDo } from "../requests/toDo";

export function* handleGetToDo(action) {
  try {
    const response = yield call(requestGetToDo);
    const { data } = response;
    console.log(response);
    yield put(setToDo(data));
  } catch (error) {
    console.log(error);
  }
}
