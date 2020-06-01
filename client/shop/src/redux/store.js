import { createStore, combineReducers } from 'redux'
import cartReducer from './cart-reducer'

let reducers = combineReducers({
  cart: cartReducer,
})

let store = createStore(reducers)

export default store
