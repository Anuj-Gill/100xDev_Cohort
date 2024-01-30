import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  )
}

function Count({count, setCount}){ //Now this is a case of prop-drilling. In the tree, the state has been defined in the App component, and the last component in the child is the Button and in the middle is the Count component. Now as we are using the button comp in hte count, as Count does not need the setCount function but still we need to "drill" down the setCount func for the Button componenet to use it. In large forms, code can be very verbose and unreadable. This problem is fixed by Context API 
  return(
    <>
      Count: {count}
      <Button count={count} setCount={setCount}/>
    </>
  )
}

function Button({count ,setCount}) {

  
  return(
    <>
      <button onClick={() => {setCount(count + 1)}}>Increment</button>
      <button onClick={() => {setCount(count - 1)}}>Decrement</button>
    </>
  )

}

export default App
