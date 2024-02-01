
export const Navbar = () => {
  return(
    <div className="flex fixed top-0 left-0 right-0 h-16 justify-between items-center bg-red-300">
      <div className="flex w-64 bg-blue-300 -mr-36 ml-4 items-center ">
        <div className="mr-3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 font-extrabold ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className="font-normal text-2xl mr-2">
          Payouts
        </div>
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" className="w-4 h-5 ml-3 mr-1  text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
          <div className="text-sm text-gray-600 ">
            How it works
          </div>
        </div>
      </div>


      <div className="bg-pink-500">
        <input type="text" placeholder="Search features, tutorials, etc.">

        </input>
      </div>


      <div className="bg-green-300">Right</div>
    </div>
  )
}