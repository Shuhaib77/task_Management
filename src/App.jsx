import { useState } from 'react'
import './App.css'
import UserRouter from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserRouter/>
    </>
  )
}

export default App
