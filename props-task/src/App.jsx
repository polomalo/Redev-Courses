import './App.css'
import React, { useState } from 'react'

function IncreaseCount() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count => count + 1)
  }
  return (
    <div>
      <h2>First Task</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  )
}

function HideText() {
  const [showText, setShowText] = useState(true)
  const handleClick = () => {
    setShowText(showText => !showText)
  }
  return (
    <div>
      <h2>Second Task</h2>
      <button onClick={handleClick}>Hide</button>
      {showText && <p>Hide this text!</p>}
    </div>
  )
}

function ChangeColorText() {
  const [colorText, setColorText] = useState()
  const handleClick = () => {
    setColorText(
      colorText =>
        (colorText = `#${Math.floor(Math.random() * 16777215).toString(16)}`)
    )
  }
  const style = {
    color: colorText,
  }
  return (
    <div>
      <h2>Third Task</h2>
      <button onClick={handleClick}>Change color</button>
      <p style={style}>Change my color!</p>
    </div>
  )
}

function App() {
  return (
    <>
      <IncreaseCount />
      <HideText />
      <ChangeColorText />
    </>
  )
}

export default App
