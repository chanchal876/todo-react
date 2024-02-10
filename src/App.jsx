
import { useState } from "react"
import Container from "./Components/Container"


function App() {
  const [todos, setTodos] = useState([])

  const [edit , setEdit] = useState({
  todo: {},
  isEdit: false,

  })

  

  


  //  const addTodo = (text) =>{
  //   console.log(text)
  // const newTodo = {
  //     id: crypto.randomUUID(),
  //     text,
  // }
  // setText([newTodo , ...todos])
  //  }


  const addTodo = (add) => {
    console.log(add)

    const newTodo = (
      {
        id: crypto.randomUUID(),
        text: add
      }
    )
    setTodos([newTodo, ...todos])
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        if (item.id !== id) {
          return true;
        }
      })
    )
  }

  const editTodo = (puraneWalaTodo) =>{
    setEdit(
      {
        todo: puraneWalaTodo,
        isEdit: true,
      }
    )
  }


  const updateTodo = (oldId, newText) => {
    setTodos(todos.map((item) => {
      if(
        item.id === oldId){
          return{
            id: oldId,
            text: newText
          }
        }
      else{
        return item;
      }
    })
    )
    setEdit(
      {
        todo: {},
        isEdit: false
      }
     )
  }




  


  return (
    <>
      <div className="fluid-container p-5" style={{ backgroundColor: "#223178", height: "100vh" }}>
        <div className="container p-5">
          <Container todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} edit={edit} updateTodo={updateTodo}/>
        </div>
      </div>

    </>
  )
}

export default App
