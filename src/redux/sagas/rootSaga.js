import { takeLatest } from "redux-saga/effects";
import { handleGetToDo, handlePostToDo } from "./handlers/toDo";
import { GET_TODO, POST_TODO } from "../reducers/toDo";

export function* watcherSaga() {
  yield takeLatest(GET_TODO, handleGetToDo);
  yield takeLatest(POST_TODO, handlePostToDo);
}
