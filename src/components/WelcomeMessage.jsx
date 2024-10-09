import React, { useContext } from 'react'
import styles from './WelcomeMessage.module.css'
import {TodoItemsContext} from '../store/todo-items-store'
const WelcomeMessage = () => {

  const { todoItems } = useContext(TodoItemsContext);

  return (

    //  conditional rendering: trynary operator or logical operator inside tag but before return we can use  if else

    todoItems.length === 0 && <p className={styles.welcomeMessage}>Enjoy Your Day!!!</p>
  )
}

export default WelcomeMessage