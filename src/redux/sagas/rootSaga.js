import { takeLatest } from "redux-saga/effects";
import {
  handleGetToDo,
  handlePostToDo,
  handleCompleteToDo,
  handleDeleteToDo,
  handleFilterActiveToDo,
  handleFilterCompletedToDo,
  handleFilterClearCompletedToDo
} from "./handlers/toDo";
import {
  GET_TODO,
  POST_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  FILTER_ACTIVE_TODO,
  FILTER_Completed_TODO,
  FILTER_ClearCompleted_TODO
} from "../reducers/toDo";

export function* watcherSaga() {
  yield takeLatest(GET_TODO, handleGetToDo);
  yield takeLatest(POST_TODO, handlePostToDo);
  yield takeLatest(COMPLETE_TODO, handleCompleteToDo);
  yield takeLatest(DELETE_TODO, handleDeleteToDo);
  yield takeLatest(FILTER_ACTIVE_TODO, handleFilterActiveToDo);
  yield takeLatest(FILTER_Completed_TODO, handleFilterCompletedToDo);
  yield takeLatest(FILTER_ClearCompleted_TODO, handleFilterClearCompletedToDo);
}
