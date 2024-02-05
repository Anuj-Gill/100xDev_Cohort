import { useState } from 'react'
import {RevenueCard} from './components/RevenueCard'
import './App.css'
import { Navbar } from './components/Navbar'
import { BelowNavbar } from './components/BelowNavbar'
import { TransactionsHeader, TransactionsSearch, TransactionsTableHeader, TrasactionsDetails } from './components/Transactions'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
      <body className='pt-20 mb-100 bg-gray-50 pl-60 '>
      <Sidebar/>
      <Navbar />
      <BelowNavbar />
      <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        <RevenueCard title={"Next Payout"} amount={"92,000.00"} orderCount={13} first={true}/>
        <RevenueCard title={"Amount Pending"} amount={"92,000.00"} orderCount={13}/>
        <RevenueCard title={"Amount Processed"} amount={"92,000.00"} />
      </div>
      <div className='mr-12'>
        <TransactionsHeader payouts={22} refunds={30} />
        <div className='pl-3'>
        <TransactionsSearch />
        <table className='table-auto w-full'>
          <thead className='bg-gray-200'>
            <TransactionsTableHeader />
          </thead>
          <tbody>
            <TrasactionsDetails orderId={"#281209"} status={true} transactionId={"TRX123456"} refundDate={"Today, 8:45 PM"} orderAmount={"$1125.00"} />
            <TrasactionsDetails orderId={"#281210"} status={false} transactionId={"TRX123457"} refundDate={"Tomorrow, 10:00 AM"} orderAmount={"$202.00"} />
            <TrasactionsDetails orderId={"#281211"} status={true} transactionId={"TRX123458"} refundDate={"Yesterday, 3:30 PM"} orderAmount={"$30.00"} />
            <TrasactionsDetails orderId={"#281212"} status={true} transactionId={"TRX123459"} refundDate={"Today, 8:45 PM"} orderAmount={"$779.00"} />
            <TrasactionsDetails orderId={"#281213"} status={"Processing"} transactionId={"TRX123460"} refundDate={"Today, 11:20 AM"} orderAmount={"$110.00"} />
            <TrasactionsDetails orderId={"#281214"} status={false} transactionId={"TRX123461"} refundDate={"Tomorrow, 9:00 AM"} orderAmount={"$113.00"} />
            <TrasactionsDetails orderId={"#281215"} status={"Successful"} transactionId={"TRX123462"} refundDate={"Today, 8:45 PM"} orderAmount={"$300.00"} />
            <TrasactionsDetails orderId={"#281216"} status={false} transactionId={"TRX123463"} refundDate={"	Yesterday, 4:00 PM	"} orderAmount={"$420.00"} />

          </tbody>
        </table>
        </div>
      </div>
        
      </body>
  )
}

export default App
