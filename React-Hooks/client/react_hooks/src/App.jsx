import {useState} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(3) //The argument is the default state. This hook returns 2 arrays, (i) count is the current value of the state and (ii) setCount is a function that is used to set the value of the state. The default value can also be a function to avoid running the default value each time the component is re-rendered.
  //In case of using objects in the useState..
  const [state, setState] = useState({count : 1, theme: "Blue"});



  function decrementState(){
    // if(count === 0) {
    //   return
    // }
    // setCount(prevCount => prevCount - 1);
    // setCount(prevCount => prevCount - 1);
    setState(prevState => {
      return {...prevState, count: prevState.count - 1} //Here the problem is, it overwrites the default state and we will loose the theme property. So always use spread operator while dealing with objects in state.
    })

  }

  function incrementState(){
    // if(cou)
    // setCount(count + 1)
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    setState(prevState => {
      return {...prevState, count: prevState.count + 1} 
    })
  }

  return (
    <>
      <button onClick={decrementState}> - </button>
      <span> {state.count} </span>
      <span> {state.theme} </span>
      <button onClick={incrementState}> + </button>
    </>
  )
}

export default App
