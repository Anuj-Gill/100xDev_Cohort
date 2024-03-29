import { useState } from "react"
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);
  

  //Wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  const count = useContext(CountContext)
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App