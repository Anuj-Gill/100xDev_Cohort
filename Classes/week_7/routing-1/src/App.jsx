import React, { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
const Landing = React.lazy(() => import('./components/landing'));
const Topbar = React.lazy(() => import("./components/Topbar"))
const Dashboard = React.lazy(() => import("./components/dashboard"));


function App() {

  

  return (
    <>
      <Topbar />
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>

      </div>
  </div>
}

export default App
