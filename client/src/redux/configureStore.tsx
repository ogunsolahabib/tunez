import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import reducers, { AppState } from "./reducers";

export default function configureStore(preloadedState: AppState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  const store = createStore(reducers, preloadedState, ...enhancers);

  return store;
}
