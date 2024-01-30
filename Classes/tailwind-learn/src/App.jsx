import { useState } from 'react'
import {RevenueCard} from './components/RevenueCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <RevenueCard title={"Next Payout"} amount={"92,000.00"} orderCount={13} first={true}/>
      <RevenueCard title={"Amount Pending"} amount={"92,000.00"} orderCount={13}/>
      <RevenueCard title={"Amount Processed"} amount={"92,000.00"} orderCount={13}/>

      </div>
    </>
  )
}

export default App
