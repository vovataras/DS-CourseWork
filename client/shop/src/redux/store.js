import { createStore, combineReducers, applyMiddleware } from 'redux'
import cartReducer from './cart-reducer'
import checkoutReducer from './checkout-reducer'
import { RESTORE_STATE } from './actions'
import logger from 'redux-logger'

let reducers = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
})

const rootReducer = (state, action) => {
  if (action.type === RESTORE_STATE) {
    state = undefined

    console.log(state)
  }

  return reducers(state, action)
}

let store = createStore(rootReducer, applyMiddleware(logger))

export default store
