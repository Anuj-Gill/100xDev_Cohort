import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"

export default function App() {
  const [todos, setTodos] = useState([])

  function updateTodos(){
    const todoList = fetchTodo();
    console.log(todoList)
    setTodos(todoList);
  }

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todoList={updateTodos()}></Todos>
    </div>
  )
}

async function fetchTodo() {
  const response = await fetch("http://localhost:3000/todo");
  const todosList = await response.text();
  console.log(todosList);
  return todosList;
}


