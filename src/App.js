import React from 'react'
import './App.css'
import { FilteringTable } from './components/FilteringTable'
import { RowSelection } from './components/RowSelection'
import { SortingTable } from './components/SortingTable'

function App() {
  return (
    <div className='App'>
      <FilteringTable />
    </div>
  )
}

export default App
