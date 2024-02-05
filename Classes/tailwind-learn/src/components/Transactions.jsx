


export const TransactionsHeader = ({payouts, refunds}) => {
  return(
    <div className="mb-10">
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
    <div className="flex justify-between items-center mb-4   ">
      <div className="flex items-center border-gray-200 border-2 pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="gray"  className="w-4 h-4 mr-2 -mb-1" viewBox="0 0 24 24"><path   d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
        <input type="text" placeholder="Order ID or transactions ID" className="focus:outline-none h-8 w-64" />
      </div>
      <div className="flex items-center">
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
      <tr>
        <th className="text-left px-4 py-2 tracking-wider text-md font-normal text-gray-800">Order ID</th>
        <th className="text-left px-4 py-2 tracking-wider text-md font-normal text-gray-800">Status</th>
        <th className="text-left px-4 py-2 tracking-wider text-md font-normal text-gray-800">Transaction ID</th>
        <th className="text-left px-4 py-2 tracking-wider text-md font-normal text-gray-800">Refund Date</th>
        <th className="text-right px-4 py-2 tracking-wider text-md font-normal text-gray-800">Order Amount</th>
      </tr>

  )
}

export const TrasactionsDetails = ({orderId, status, transactionId, refundDate, orderAmount}) => {
  return(
      <tr>
        <td className="px-4 py-2">{orderId}</td>
        {status ? <td className="flex items-center px-4 py-2">
          <span className="bg-green-500 w-[10px] h-[10px] rounded-full mr-1"> </span>
          <p>Successful</p>
          </td>
          : <td className="flex items-center px-4 py-2"> 
            <span className="bg-gray-400 w-[10px] h-[10px] rounded-full mr-1"> </span>
            <p>Unsuccessful</p>
          </td>
        }
        <td className="px-4 py-2">{transactionId}</td>
        <td className="px-4 py-2">{refundDate}</td>
        <td className="text-right px-4 py-2">{orderAmount}</td>
      </tr>
    
  )
}