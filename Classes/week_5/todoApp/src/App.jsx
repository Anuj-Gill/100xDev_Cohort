import { useState } from "react"
// import "./styles.css"

export default function App(){
  // const [newItem, setNewItem] = useState("f ") //The newItem is the value, and the setNewItem is a function used to set value to the newItem variable. Whenever setNewItem function is called, it render's the complete page again and all the components.
  const [todos,setTodos] = useState([{
    title:"Read book",
    description: "Read a book of your choice",
    completed: true
  }])
  return(
    <>
      <div>
        {JSON.stringify(todos)}
      </div>
    </>
  )
}