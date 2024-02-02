import { Button } from './ui/button'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, checkTodo, clearCompleted } from '../store'

interface Todo {
  id: string
  item: string
  completed: boolean
}

interface RootState {
  todo: {
    todos: Todo[]
  }
}

export function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todo.todos)

  const handleDelete = (todo: Todo) => {
    dispatch(removeTodo(todo.id))
  }

  const handleCheck = (todo: Todo) => {
    dispatch(checkTodo(todo.id))
  }

  return (
    <>
      <div className='w-full mt-8 rounded shadow-2xl wrapper bg-custom-VeryLightGray dark:bg-custom-VeryDarkBlue '>
        {todos.map((todo) => {
          const { item, id, completed } = todo
          return (
            <div
              key={id}
              className='flex items-center justify-between px-5 py-3 border-b-2 '
            >
              <div className='flex items-center w-full '>
                <div
                  onClick={() => handleCheck(todo)}
                  className={`grid cursor-pointer w-10 h-10 border-2 rounded-full place-items-center mr-4 ${
                    completed ? 'bg-blue-500' : ''
                  } `}
                >
                  {completed ? (
                    <img className='' src='/images/icon-check.svg ' />
                  ) : null}
                </div>
                <div className=''>
                  <p
                    className={
                      completed
                        ? `line-through opacity-50 break-all `
                        : ' break-all '
                    }
                  >
                    {item}
                  </p>
                </div>
              </div>

              <div
                className='cursor-pointer'
                onClick={() => handleDelete(todo)}
              >
                <img src='/images/icon-cross.svg' />
              </div>
            </div>
          )
        })}
        {todos.length > 0 ? (
          <div className='flex items-center justify-between py-3 pl-7'>
            <p className='text-slate-500/70'>
              {todos.filter((todo) => !todo.completed).length} items left
            </p>
            <Button
              className='dark:hover:text-white text-slate-500/70 hover:text-black'
              onClick={() => dispatch(clearCompleted())}
              variant={'none'}
            >
              Clear Completed
            </Button>
          </div>
        ) : null}
      </div>
    </>
  )
}
