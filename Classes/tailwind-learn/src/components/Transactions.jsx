


export const TransactionsHeader = ({payouts, refunds}) => {
  return(
    <div className="mb-6">
      <div className="text-2xl font-semibold mb-5">
        <p>Transactions | This Month</p>
      </div>
      <div className="flex align-center">
        <button className="bg-gray-200 text-gray-500 pr-4 pl-4 pt-1 pb-1 text-md  mr-4 rounded-3xl">
          Payouts ({payouts})
        </button>
        <button className="bg-sky-600 text-white pr-4 pl-4 pt-1 pb-1 text-md  mr-4 rounded-3xl">
          Refunds ({refunds})
        </button>
      </div>

    </div>
  )
}

export const TransactionsSearch = () => {
  return(
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center border-gray-200 border-2 pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="gray"  className="w-4 h-4 mr-2 -mb-1" viewBox="0 0 24 24"><path   d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
        <input type="text" placeholder="Order ID or transactions ID" className="focus:outline-none h-8 w-64" />
      </div>
      <div className="pr-7 flex items-center">
        <button className="flex mr-4 pt-1 pb-1 pr-2 pl-2 border-2 items-center">
          Sort <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
        </button>
        <button className="pt-1 pb-1 pr-2 pl-2 border-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>

        </button>
      </div>
    </div>
  )
}

export const TransactionsTableHeader = () => {
  return(
    <div className="flex justify-around -ml-7 bg-pink-200">
      <p>Order ID</p>
      <p>Status</p>
      <p>Transaction ID</p>
      <p>Refund Date</p>
      <p>Order Amount</p>
    </div>
  )
}

export const TrasactionsDetails = ({orderId, status, transactionId, refundDate, orderAmount}) => {
  return(
    <div className="flex justify-around -ml-7">
      <p>{orderId}</p>
      <p>{status}</p>
      <p>{transactionId}</p>
      <p>{refundDate}</p>
      <p>{orderAmount}</p>
    </div>
  )
}