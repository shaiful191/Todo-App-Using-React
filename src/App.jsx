import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import './App.css'

function App() {
  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2024'
    },
    {
      name: 'Go to college',
      dueDate: '4/10/2024'
    },
    {
      name: 'Learn React',
      dueDate: '4/10/2024'
    },
  ]

  return (
    <div className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems  todoItems={todoItems} />
    </div>
  )
}

export default App
