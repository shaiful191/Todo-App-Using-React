import React, { useState } from 'react'

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    setError("");  
  }

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
    setError("");  
  }

  const handleAddButtonClicked = () => {
    if (todoName === "" || todoDate === "") {
      setError("Both fields are required!!!");
      return;
    }
    
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (
    <div className="container text-center">
      <div className="row item-row">
        <div className="col-6">
          <input type="text" placeholder='Enter Todo Here' className="form-control"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control"
            value={todoDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success my-btn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default AddTodo;
