import { takeLatest } from "redux-saga/effects";
import {
  handleGetToDo,
  handlePostToDo,
  handleCompleteToDo,
} from "./handlers/toDo";
import { GET_TODO, POST_TODO, COMPLETE_TODO } from "../reducers/toDo";

export function* watcherSaga() {
  yield takeLatest(GET_TODO, handleGetToDo);
  yield takeLatest(POST_TODO, handlePostToDo);
  yield takeLatest(COMPLETE_TODO, handleCompleteToDo);
}
