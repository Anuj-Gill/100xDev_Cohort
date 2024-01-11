import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([{id:1,title:"Driving",description:"Learn driving at 12"},
  {id:2, title:"Code",description:"Code for an hour"},{id:3, title:"Read",description:"Read india's military history"}])

  function addTodo(){
    setTodos([...todos, {id:counter++, title:"Driving",description:"Learn driving at 12"}])
  }
  // console.log(todos)

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((task) => {
        console.log(typeof task)
        return(
          <Todo key={task.id} todo = {task} />
        )
      })}
    </>
  )
}

function Todo({todo}) {
  const {title, description} = todo;
  return(
    <>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </>
  )
}


export default App
