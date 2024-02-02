import { useState } from 'react'
import {RevenueCard} from './components/RevenueCard'
import './App.css'
import { Navbar } from './components/Navbar'
import { BelowNavbar } from './components/BelowNavbar'
import { TransactionsHeader, TransactionsSearch, TransactionsTableHeader, TrasactionsDetails } from './components/Transactions'

function App() {
  return (
      <body className='pt-20 mb-100 bg-gray-50 pl-5'>
      <Navbar />
      <BelowNavbar />
      <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        <RevenueCard title={"Next Payout"} amount={"92,000.00"} orderCount={13} first={true}/>
        <RevenueCard title={"Amount Pending"} amount={"92,000.00"} orderCount={13}/>
        <RevenueCard title={"Amount Processed"} amount={"92,000.00"} />
      </div>
      <div className='pl-4'>
        <TransactionsHeader payouts={1200} refunds={30} />
        <TransactionsSearch />
        <TransactionsTableHeader />
        <TrasactionsDetails orderId={"#281209"} status={"Successful"} transactionId={"TRX!@#$%^"} refundDate={"Today, 8:45 PM"} orderAmount={"$1125.00"} />
      </div>
        
      </body>
  )
}

export default App
