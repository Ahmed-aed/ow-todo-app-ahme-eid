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

sagaMiddleware.run(watcherSaga);

export default store;
