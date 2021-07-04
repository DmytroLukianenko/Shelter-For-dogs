import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import clientInfoReducer from './reducers/reducers'
import reducers from './reducers/reducers'
const store = configureStore({
  reducer: reducers,
})
export default store
