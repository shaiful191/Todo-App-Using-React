import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import TodoItemsContextProvider from './store/todo-items-store';

function App() {
  return (
    <TodoItemsContextProvider>
      <div className='todo-container'>
        <AppName />

        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContextProvider>

  )
}

export default App
