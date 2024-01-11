import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);


  function handleClick() {
    setCount(count + 1)
  }

  function handleChange(event) {
    setValue(event.target.value)
  }


  let sum = useMemo(() => {
    console.log("hello")
    let finalSum = 0;
    for(let i = 0; i <= value; i++) {
      finalSum += i;
    }
    return finalSum;
  },[value])

  return (
    <>
      <input onChange={(event) => handleChange(event)} type="number" name="" id="num" />
      <h3>Sum is {sum}</h3>
      <button onClick={() => handleClick()}>Counter {`(${count})`}</button>
    </>
  )
}

export default App
