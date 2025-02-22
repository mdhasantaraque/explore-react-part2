import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tello from './hello'
import Count from './Count'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Users></Users>
    <Count></Count>
    <Tello></Tello>
    {/* <Hello></Hello> */}
    
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
     
      
    </>
  )
}

export default App
