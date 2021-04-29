import { call, put } from "redux-saga/effects";
import {
  requestGetToDo,
  requestPostToDo,
  requestCompleteToDo,
  requestDeleteToDo,
  requestFilterActiveToDo,
  requestFilterCompletedToDo,
  requestFilterClearCompletedToDo
} from "../requests/toDo";


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

export function* handleCompleteToDo(action) {
  try {
    const response = yield call(requestCompleteToDo, action.payload);
    if (response)
      yield put({ type: "COMPLETE_TODO", payload: JSON.parse(response) });
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteToDo(action) {
  console.log(action);
  try {
    const response = yield call(requestDeleteToDo, action.payload);
    if (response) {
      yield put({ type: "COMPLETE_TODO", payload: JSON.parse(response) });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleFilterActiveToDo(action) {
  try {
    const response = yield call(requestFilterActiveToDo, action.payload);
    if (response) {
      console.log(JSON.parse(response));
      yield put({ type: "FILTER_ACTIVE_TODO", payload: JSON.parse(response) });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleFilterCompletedToDo(action) {
  console.log(action);
  try {
    const response = yield call(requestFilterCompletedToDo, action.payload);
    if (response) {
      yield put({ type: "FILTER_COMPLETED_TODO", payload: JSON.parse(response) });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleFilterClearCompletedToDo(action) {
  try {
    const response = yield call(requestFilterClearCompletedToDo, action.payload);
    if (response) {
      yield put({ type: "FILTER_CLEAR_COMPLETED", payload: JSON.parse(response) });
    }
  } catch (error) {
    console.log(error);
  }
}