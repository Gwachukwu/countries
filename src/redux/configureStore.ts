import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import countriesReducer from "./ducks/countries";
import { watcherSaga } from "./sagas/rootSaga";

const appReducer = combineReducers({
  countries: countriesReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga);

export default store;
