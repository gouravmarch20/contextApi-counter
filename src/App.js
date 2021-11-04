import React from 'react'
// --- COMPONENTS
import Counter from './components/Counter'
import GitSearch from './components/GitSearch'

//  --- PROVIDER
import CounterProvider from './context/provider/CounterProvider'
import FetchProvider from './context/provider/FetchProvider'
const App = () => {
  return (
    <div>
      <CounterProvider>
        <FetchProvider>
          <h1>gourav</h1>
          <Counter />
          <GitSearch />
        </FetchProvider>
      </CounterProvider>
    </div>
  )
}

export default App
