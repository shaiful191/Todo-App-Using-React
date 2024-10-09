import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import styles from './TodoItems.module.css'
import {TodoItemsContext} from '../store/todo-items-store';

const TodoItems = () => {

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemContainer}>
      
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          
        />
      ))}
    </div>
  )
}

export default TodoItems
