import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])


  useEffect(() => {
    // const fetchData = async () => {
    //   try{
    //     const req = await fetch("https://sum-server.100xdevs.com/todos");
    //     const response = await req.json();
    //     const todosList = response.todos;
    //     setTodos(todosList)
    //   }
    //   catch(error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }
    // fetchData();
    // const intervalId = setInterval(fetchData,5000);
    // return () => clearInterval(intervalId);
    setInterval(async () => {
      const req = await fetch("https://sum-server.100xdevs.com/todos");
      const response = await req.json();
      const todosList = response.todos;
      setTodos(todosList)
    },2000)
    // async function fetchData(){
      
    //   const req = await fetch("https://sum-server.100xdevs.com/todos");
    //     const response = await req.json();
    //     const todosList = response.todos;
    //     setTodos(todosList)
    // }
    // fetchData()
  },[])
  

  return (
    <>
      {todos.map(task => {
        return (
          <TodoRender key={task.id} title={task.title} description={task.description} />
        )
      })}
    </>
  )
  
}

function TodoRender({title, description}) {
  console.log()
  return(
    
    <>
       <h2>{title}</h2>
       <h3>{description}</h3>
    </>
  )
}



export default App
