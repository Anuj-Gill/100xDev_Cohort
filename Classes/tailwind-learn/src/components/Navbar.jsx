import { useState } from "react"



export const Navbar = () => {
  const [clicked,setClicked] = useState(false)

  // function handleButton() {
  //   console.log(clicked)
  //   setClicked(!clicked);
  //   alert('hello world')
  //   return(
  //     <>
  //       <div>Hello world</div>
  //     </>
  //   )
  // }
  

  return(
    <div className="flex border-2 border-gray-200  fixed top-0 left-56 right-0 h-16 justify-between items-center bg-white -ml-56 md:ml-0">
      <div className="flex w-64 -mr-36 ml-4 items-center ">
        <div className="mr-3 cursor-pointer visible md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg"   onClick={() => handleButton()} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-extrabold ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className="font-normal text-xl mr-2 md:text-2xl">
          Payouts
        </div>
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5 ml-3 mr-1  text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
          <div className="text-sm text-gray-600 hidden sm:contents">
            How it works
          </div>
        </div>
      </div>


      <div className="flex bg-slate-100 p-3 pt-2 ml-10 pb-2 h-9 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3  ml-2 mr-2 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input className="bg-slate-100 focus:outline-none text-gray-500 w-20 sm:w-40 md:w-56 lg:w-72" type="text" placeholder="Search features, tutorials, etc." />
      </div>


      <div className="flex pr-7 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-gray-200 rounded-full p-1 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-gray-200 rounded-full ml-2 p-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>


      </div>
    </div>
  )
}