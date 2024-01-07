export default function Todos(todos){
  console.log(todos)
  return (
    <div>
      {todos.map((task) => {
        return(
          <>
          <h1>{task.title}</h1>
          <h1>{task.description}</h1>
          <button>Mark as completed</button>
          </>
        )

      })}
    </div>
  )
}

