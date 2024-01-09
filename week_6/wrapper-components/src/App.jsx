import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <CardWrapper>
          hello world
        </CardWrapper>
        <CardWrapper>
          hi world
        </CardWrapper>
      </>
  )
}



function CardWrapper({children}){
  // console.log(innerComponent)
  return(
    <div style={{border: "2px solid black"}}>
      {children}
    </div>
  )

}

export default App
