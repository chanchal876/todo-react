import React from 'react'
import Form from './Form'
import ListGroup from './ListGroup'

const Card = ({ todos, addTodo, deleteTodo , editTodo , edit, updateTodo}) => {
  return (
    <div className="card p-2">
      <h1 className="fs-3 p-3" style={{ color: "#223178" }}>
        To-Do List <i class="fa-solid fa-book"></i>
      </h1>
      <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo}/>
      <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  )
}

export default Card
