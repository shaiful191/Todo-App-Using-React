import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItemOne from './components/TodoItemOne'
import TodoItemTwo from './components/TodoItemTwo'
import './App.css'

function App() {

  return (
    <div className='todo-container'>
      <AppName />
      <AddTodo />
      <div className='item-container'>
        <TodoItemOne />
        <TodoItemTwo />
      </div>

    </div>
  )
}

export default App
