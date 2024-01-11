import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  // const renderCount = useRef(1); //useRef returns an object : {current : 1}. ref is always an object with a single .current property which is set to the current value of the ref. what makes refs so powerful is the fact that they are persisted between renders and refs do not cause a component to re-render when changed.

  // useEffect(() => {
  //   renderCount.current += 1;
  // })

  const inputRef = useRef();

  function handleFocus() {
    inputRef.current.focus();

  }

  return (
    <>
      <input ref={inputRef} type="text" name="" id="" onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={handleFocus}>Focus</button>
    </>
  )
}

export default App
