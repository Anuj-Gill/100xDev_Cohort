export const RevenueCard = ({title, orderCount, amount, first}) => {
  return(
    <div  className={first ? "bg-sky-600 rounded-lg shadow-md p-3 text-white mx-6" : "bg-white rounded-lg shadow-md mx-6 p-3"}>
      <div className="flex text-lg ml-3 mr-1 ">
        { title }
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1 ml-3 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>

        </div>
      </div>
      <div className="flex justify-between m-2 items-center">
        <div className="text-3xl font-medium tracking-wide ">
          $ { amount }
        </div>
        {orderCount ? <div className="flex">
          <div className="-mr-0.5 font-medium underline">
          {orderCount} order(s) 
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </div> : null }
      </div>
    </div>
  )

}