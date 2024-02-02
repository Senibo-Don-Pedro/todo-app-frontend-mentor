// localStorageMiddleware.js

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)

  // Save only the 'todo' slice state to local storage
  localStorage.setItem('reduxTodoState', JSON.stringify(store.getState().todo))

  return result
}
