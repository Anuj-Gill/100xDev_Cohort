import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [todoId, setTodoId] = useState(1)
  function handleClick(event) {
    const value = event.target.textContent;
    console.log(value)
    setTodoId(value);
  }

  const nums = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      {nums.map(e => {
        return(
          <button key={e} onClick={event => handleClick(event)}>{e}</button>
        )
      })}
      <Todo id={todoId}/>
    </>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useState({})


  useEffect(() => {
    console.log("running")
    try{
      async function fetchTodo() {
        const request = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
        const response = await request.json();
        const task = response.todo;
        setTodo(task);
      }
      fetchTodo();
    }
    catch(error) {
      console.error(error)
    }
  },[id])

    return(
      <>
        <h2>
          {todo.title}
        </h2>
        <h3>
          {todo.description}
        </h3>
      </>
    )
}

export default App
