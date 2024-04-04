import { useState } from 'react'
import Services from './components/services/services'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Services/></div>
    </>
  )
}

export default App
