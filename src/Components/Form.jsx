
import { useEffect } from "react"
import {useState } from "react"



const Form = ({addTodo , edit , updateTodo}) => {

  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(
      edit.isEdit
    ){
        updateTodo(edit.todo.id , text)
    }else{
      addTodo(text)
    }
    setText("")
  }


  useEffect( () =>{
    setText(
      edit.todo.text
    )
  } , [edit]
    
  )



  


  



  return (
    <form className="my-3 d-flex my-3 mx-3" style={{ backgroundColor: "#eceeef", borderRadius: "20px" }} onSubmit={(e) => handleSubmit(e)} >
      <input className="form-control ps-3" type="text" placeholder="Add Your Task" style={{ backgroundColor: "#eceeef", border: "none", borderRadius: "20px" , outline:"none"}}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-sm text-light fw-bold fs-6" style={{ border: "none", borderRadius: "20px", backgroundColor: "rgb(255,89,68)", width: "120px" }}>Add</button>
    </form>
  )
}

export default Form
