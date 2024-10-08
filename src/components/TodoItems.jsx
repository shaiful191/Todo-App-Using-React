import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoItems.module.css'

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  )
}

export default TodoItems
