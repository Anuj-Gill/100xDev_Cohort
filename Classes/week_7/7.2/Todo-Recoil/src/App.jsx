import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodosTable } from './components/TodosTable'
import {RecoilRoot} from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <TodoForm />
        <TodosTable />
      </RecoilRoot>
    </>
      
  )
}

export default App
