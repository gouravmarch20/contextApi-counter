import React from 'react'
import CounterProvider from './context/provider/CounterProvider'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <CounterProvider>
        <h1>gourav</h1>
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
