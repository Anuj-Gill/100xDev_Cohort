export const BelowNavbar = () => {

  return(
    <div className="flex justify-between  p-4 mb-4 items-center">
      <div className="text-xl -ml-1">
        Overview
      </div>
      <div className="flex border-2 cursor-pointer border-gray-100 rounded-sm p-1 items-center bg-white">
        <div className="ml-2 text-gray-500">
          This Month
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 ml-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

        
      </div>
    </div>
  )


}