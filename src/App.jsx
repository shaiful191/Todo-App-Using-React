import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import './App.css'
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import TodoItemsContext from './store/todo-items-store';

function App() {

  const initialTodoItems = [

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
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, { name: itemName, dueDate: itemDueDate }];
      return newTodoItems;
    });
  }

  const deleteItem = (itemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItems);
  }

  return (

    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem
    }}>
      <div className='todo-container'>
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContext.Provider>

  )
}

export default App
