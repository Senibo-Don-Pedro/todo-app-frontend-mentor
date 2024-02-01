import { Header } from './components/header'
import { ThemeContainer } from './components/theme-Container'
import { InputForm } from './components/inputForm'
import { TodoList } from './components/todoList'

export default function App() {
  return (
    <div className='text-lg'>
      <ThemeContainer />
      <Header />
      <InputForm />
      <TodoList />
    </div>
  )
}
