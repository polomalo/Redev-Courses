import React, { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent.jsx'
import SiblingComponent from './SiblingComponent.jsx'

function ParentComponent() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter => counter + 1)
  }
  const reset = () => {
    setCounter(0)
  }
  const randomNumber = () => {
    const min = 1
    const max = 10
    setCounter(Math.floor(Math.random() * (max - min + 1) + min))
  }
  const decrement = () => {
    setCounter(counter => (counter > 0 ? counter - 1 : counter))
  }
  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={randomNumber}>Random</button>
      <ChildComponent name={'Dima'} count={counter} />
      <SiblingComponent />
    </div>
  )
}

export default ParentComponent
