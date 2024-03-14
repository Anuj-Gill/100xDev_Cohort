import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodosTable } from './components/TodosTable'
import {RecoilRoot} from 'recoil'
import { SearchForm } from './components/SearchForm'

function App() {

  return (
    <>
      <RecoilRoot>
        <TodoForm />
        <SearchForm />
        <TodosTable />
      </RecoilRoot>
    </>
      
  )
}

export default App
