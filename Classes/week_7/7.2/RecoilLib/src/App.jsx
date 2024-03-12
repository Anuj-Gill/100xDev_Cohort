import { countAtom } from "./store/atoms/count";
import { useRecoilValue , RecoilRoot, useRecoilState, useSetRecoilState, selector } from "recoil";
import { evenSelector } from "./store/atoms/count";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log('re-render');
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <Status />
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function Status() {
  const isEven = useRecoilValue(evenSelector);

  return(
    <div>
      {isEven ? <div>It is even</div> : <div>It is odd</div>}
    </div>
  )
}

export default App