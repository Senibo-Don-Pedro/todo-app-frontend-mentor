import { createSlice, nanoid } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    todos: [],
  },

  reducers: {
    addTodo(state, action) {
      // Assumption
      // action.payload === {item: 'todo'}
      state.todos.push({
        item: action.payload.item,
        id: nanoid(),
        completed: false,
      })
    },
    removeTodo(state, action) {
      // Assumption
      // action.payload has to be the id of the car we want to remove

      const updated = state.todos.filter((todo) => todo.id !== action.payload)

      state.todos = updated
    },
    checkTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    clearCompleted: (state) => {
      const done = state.todos.filter((todo) => !todo.completed)

      state.todos = done
    },
  },
})

export const { addTodo, removeTodo, checkTodo, clearCompleted } =
  todoSlice.actions

export const todoReducer = todoSlice.reducer
