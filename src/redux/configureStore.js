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
      label: "Redux Saga",
      value: "Redux Saga",
      completed: true,

    },
    {
      label: "Drink Water",
      value: "Drink Water",
      completed: false,

    },
  ])
);
sagaMiddleware.run(watcherSaga);

export default store;
