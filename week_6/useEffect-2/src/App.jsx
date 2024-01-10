import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [todoId, setTodoId] = useState(1)
  function handleClick(event) {
    const value = event.target.textContext;
    console.log(value)
    setTodoId(value);
  }

  return (
    <>
      <button onClick={event => handleClick(event)}>1</button>
      <button onClick={event => handleClick(event)}>2</button>
      <button onClick={event => handleClick(event)}>3</button>
      <button onClick={event => handleClick(event)}>4</button>
      <button onClick={event => handleClick(event)}>5</button>
      <button onClick={event => handleClick(event)}>6</button>
      <button onClick={event => handleClick(event)}>7</button>
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
