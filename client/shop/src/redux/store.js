import { createStore, combineReducers } from 'redux'
import cartReducer from './cart-reducer'
import checkoutReducer from './checkout-reducer'
import { RESTORE_STATE } from './actions'

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

let store = createStore(rootReducer)

export default store
