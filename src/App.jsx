import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import './App.css'
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

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

  const handelNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, { name: itemName, dueDate: itemDueDate }];
      return newTodoItems;
    });
  }

  const handelDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItems);
  }

  return (
    <div className='todo-container'>
      <AppName />
      <AddTodo onNewItem={handelNewItem} />
      {/* conditional rendering: trynary operator or logical operator inside tag but before return we can use  if else */}
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handelDeleteItem} />
    </div>
  )
}

export default App
