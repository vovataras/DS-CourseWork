import { createStore, combineReducers } from 'redux'
import cartReducer from './cart-reducer'
import checkoutReducer from './checkout-reducer'

let reducers = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
})

let store = createStore(reducers)

export default store
