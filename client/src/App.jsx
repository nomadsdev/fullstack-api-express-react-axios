import { useState } from 'react'
import './App.css'

import Contact from './App/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact />
    </>
  )
}

export default App
