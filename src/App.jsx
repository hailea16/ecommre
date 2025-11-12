import Header from './components/Header'
import Sidebar from './components/Sidebar'
import React from 'react'

function App() {
  return (
    <div className='min not-first-of-type:n-h-screen bg-white'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <Header />
      </div>
    </div>
  )
}

export default App