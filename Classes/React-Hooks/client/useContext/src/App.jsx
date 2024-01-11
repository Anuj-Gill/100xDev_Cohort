import { useState, useMemo, useEffect } from 'react'
import './App.css'

//Use cases for Memo: 1) To avoid a slow function to re-compute every time
//2) Referential equality

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setdark] = useState(false)
  // const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => slowFunction(number),[number]); //Here we are memoizing the number state. When we click change theme normally without using useMemo, it give a short delay because everything re-renders and also the slow function runs again even if the value of number was not changed. BUt now we have memoized number, ie the slow function will only run when there is a change in the number state. useMemo stores the value of the given state variable.
  //
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color : dark ? "white" : "black"
    }
  },[dark])
  useEffect(() => {
    console.log("theme changed")
  },[themeStyles]); //Here the useEffect wont work on themeStyles because of referential equality. The useEffect comapares for change but in case of objects and arrays, when we compare them, we will always get false because js compares them with their reference instead of valueo

  return (
    <>
      <input type="number" name="" id="" onChange={e => setNumber(parseInt(e.target.value))} /> <br></br>
      <button onClick={() => setdark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('Calling slow function');
  for(let i = 0; i <= 100000000; i++) {}
  return num*2
}

export default App
