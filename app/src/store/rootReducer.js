import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice' // Assuming you've created todoSlice

const rootReducer = combineReducers({
  todos: todoReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
