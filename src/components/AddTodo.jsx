import React from 'react'

const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row item-row">
        <div className="col-6">
          <input type="text" placeholder='Enter Todo Here' className="form-control" />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success my-btn">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo