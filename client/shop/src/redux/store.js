import { createStore, combineReducers } from 'redux'
import collectionsReducer from './collections-reducer'

let reducers = combineReducers({
  collections: collectionsReducer,
})

let store = createStore(reducers)

export default store
