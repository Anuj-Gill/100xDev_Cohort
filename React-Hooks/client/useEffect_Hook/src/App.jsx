import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleChange = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',handleChange)
  },[])

  return (
    <>
      {/* <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
      <div>
        {data.map((e) => {
          return <pre>{JSON.stringify(e)}</pre>
        })}
      </div> */}
     <h3>{windowWidth}</h3>
    </>
  )
}

export default App
