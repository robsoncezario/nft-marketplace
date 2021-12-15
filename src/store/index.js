import {
  combineReducers,
  createStore
} from 'redux'
import walletReducer from './wallet/reducer' 
import toastyReducer from './toasty/reducer'

const rootReducer = combineReducers({
	wallet: walletReducer,
  toasty: toastyReducer,
})
const store = createStore(rootReducer)

export default store