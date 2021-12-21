import { combineReducers, createStore } from "redux";
import walletReducer from "./wallet/reducer";
import toastyReducer from "./toasty/reducer";
import mintReducer from "./mint/reducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
  toasty: toastyReducer,
  mint: mintReducer,
});
const store = createStore(rootReducer);

export default store;
