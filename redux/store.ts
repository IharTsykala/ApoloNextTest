import {
  createStore,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import securitySaga from "./security/saga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools({ trace: true, traceLimit: 25 })(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(securitySaga)

export type Dispatch<A> = (value: A) => void;

export interface Action<T> {
  type: string;
  payload?: T;
}

export default store