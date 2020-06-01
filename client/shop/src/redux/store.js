import { createStore, combineReducers } from 'redux'
import collectionsReducer from './collections-reducer'
import cartReducer from './cart-reducer'

let reducers = combineReducers({
  collections: collectionsReducer,
  cartPage: cartReducer,
})

let store = createStore(reducers)

export default store
