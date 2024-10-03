import React from 'react'

const TodoItem = ({todoName,todoDate}) => {
  return (
    <div className="container  ">
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

export default TodoItem