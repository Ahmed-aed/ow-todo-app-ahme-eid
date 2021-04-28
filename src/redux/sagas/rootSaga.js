import { takeLatest } from "redux-saga/effects";
import { handleGetToDo } from "./handlers/toDo";
import { GET_TODO } from "../reducers/toDo";

export function* watcherSaga() {
  yield takeLatest(GET_TODO, handleGetToDo);
}
