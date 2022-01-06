import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import walletReducer from "./wallet/reducer";
import toastyReducer from "./toasty/reducer";
import mintReducer from "./mint/reducer";
import authReducer from "./auth/reducer";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
  toasty: toastyReducer,
  mint: mintReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
