import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store'

export function InputForm() {
  const [item, setItem] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addTodo({ item }))
    setItem('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='mt-10 wrapper'>
        <input
          type='text'
          required
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder='Create a new todo . . .'
          className='w-full pl-20 py-4  rounded-md outline-none text-md dark:text-custom-VeryLightGrayishBlue bg-custom-VeryLightGray dark:bg-custom-VeryDarkBlue placeholder:text-custom-DarkGrayishBlue/50 placeholder:relative placeholder:top-0.5 font-normal shadow-xl '
        />
      </form>
    </>
  )
}
