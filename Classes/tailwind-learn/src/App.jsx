import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid gap-2 grid-rows-3 sm:grid-cols-2 md:grid-cols-3'> 
        <div className='bg-yellow-500'>Hi</div>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-blue-500'>Hi</div>
      </div>
    </>
  )
}

export default App
