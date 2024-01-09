import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App({title} ) {
  const [titles, setTitles] = useState(["Anuj","Gill"]);

  function handleClick(){
    const ranInt = Math.random();
    console.log(ranInt)
    setTitles(prevTitles => {
      return [prevTitles[0], ranInt]
    });
  }
  return (
    <div>
      <button onClick={handleClick}>Click me to change the title</button>
      <Header title = {titles[0]}/>
      <Header title = {titles[0]}/>
      <Header title = {titles[0]}/>
      <Header title = {titles[0]}/>
      <Header title = {titles[1]}/>

    </div>
  )
}


const Header = React.memo(function Header({title}) {
  return (
  <div>
    {title}
  </div>
  )
})

export default App
