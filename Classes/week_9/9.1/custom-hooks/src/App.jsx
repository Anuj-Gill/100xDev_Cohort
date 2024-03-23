import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false)
        })
    }, n*1000);

    return(() => {
      clearInterval(value)
    })
  }, [n])



  return { todos, loading };
}

function App() {

  const { todos, loading } = useTodos(5);
  console.log(loading)

  return (
    <>
      {loading ? <div>Loading...</div> : <div>
        {todos.map(todo => <Track todo={todo} />)}
      </div>}
      { }
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App