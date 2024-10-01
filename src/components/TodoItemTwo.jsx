import React from 'react'

const TodoItemTwo = () => {
  let todoName = 'Go to college';
  let todoDate = '4/10/2023';

  return (
    <div className="container ">
      <div className="row item-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-btn">Danger</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItemTwo