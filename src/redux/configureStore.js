import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import toDoReducer from "./reducers/toDo";

import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  todo: toDoReducer,

});


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));
//apply middleware should be 3th
localStorage.setItem(
  "toDo",
  JSON.stringify([
    {
      label: "Welcome for every one ",
      value: "Welcome for every one",
      completed: false,

    },
    {
      label: "Redux Saga to start should create action (dispatch) ",
      value: "Redux Saga to start should create action (dispatch) ",
      completed: false,

    },
    {
      label: "that action(dispatch) hit in the watcher saga",
      value: "that action(dispatch) hit in the watcher saga",
      completed: false,

    },
    {
      label: "watcher saga will call handler(handlerGetToDo)",
      value: "watcher saga will call handler(handlerGetToDo)",
      completed: false,

    },
    {
      label: "handler will call request function like(request Get to Do)",
      value: "handler will call request function like(request Get to Do)",
      completed: false,
    },
    {
      label: "when request get data,back to the handler to use put function to setToDo in redux store",
      value: "when request get data,back to the handler to use put function to setToDo in redux store",
      completed: false,
    },
    {
      label: "that will allow us to access in any where an react app  ",
      value: "that will allow us to access in any where an react app  ",
      completed: false,
    },
  ])
);
sagaMiddleware.run(watcherSaga);

export default store;
