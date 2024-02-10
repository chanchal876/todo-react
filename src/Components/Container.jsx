import React from 'react'
import Card from './Card'

const Container = ({ todos, addTodo, deleteTodo , editTodo , edit , updateTodo}) => {
  return (
    <div className="container p-5">
      <Card todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} edit={edit} updateTodo={updateTodo}/>
    </div>
  )
}

export default Container
