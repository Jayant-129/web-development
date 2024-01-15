import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function updatetitle(){
    setCount(Math.random());
  }
  return (
    <>
      <App2/>
      <h1> my name is jayant</h1>
    </>
  )
}
function App2() {
  const [count, setCount] = useState(0)
  function updatetitle(){
    setCount(Math.random());
  }
  return (
    <>
      <button onClick = {updatetitle}>Click me</button>
      <h1>my name is {count}</h1>
    </>
  )
}

export default App
