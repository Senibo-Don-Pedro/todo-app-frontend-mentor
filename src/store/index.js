import { configureStore } from '@reduxjs/toolkit'

import {
  addTodo,
  removeTodo,
  todoReducer,
  checkTodo,
  clearCompleted,
} from './slices/todoSlice'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  todo: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,

  //   {todo: todoReducer,
  // }

  //   //you use this in the useSelector,
  //   // eg const todos = useSelector((state) => state.todo[this has to be the name in the reducer].todos)
})

export { addTodo, removeTodo, checkTodo, store, clearCompleted }
