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
  // const [todoItems, setTodoItems] = useState([]);


  const handelNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Dates:${itemDueDate}`);
    const newTodoItems =  [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  }

  const handelDeleteItem = (itemName) => {
    const newTodoItems =  todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted: ${itemName}`);

  }

  return (
    <div className='todo-container'>
      <AppName />
      <AddTodo onNewItem={handelNewItem}/>
      {/* conditional rendering:  */}
      {todoItems.length === 0 &&  <WelcomeMessage/>} 
      <TodoItems todoItems={todoItems} onDeleteClick={handelDeleteItem}/>
    </div>
  )
}

export default App
