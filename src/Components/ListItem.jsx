import React from 'react'

const ListItem = ({ todo, deleteTodo , editTodo}) => {

  return (
    <li className="list-group-item rounded-0 my-3 mx-3" style={{ border: "none" }}>
      {todo.text}
      {/* {todo.id} */}
      <span className='float-end'>
        <button className='mx-1' style={{ border: "none", backgroundColor: "transparent" }} onClick={() => editTodo(todo)}><i class="fa-solid fa-pencil"></i></button>
        <button className='mx-1' style={{ border: "none", backgroundColor: "transparent" }} onClick={() => deleteTodo(todo.id)}><i class="fa-solid fa-xmark"></i></button>

      </span>
    </li>
  )
}

export default ListItem
