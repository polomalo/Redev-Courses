import React from 'react'

const CounterButton = React.memo(({ count, increaseCount }) => {
  console.log('CounterBtn')
  return (
    <>
      <div>
        <button onClick={increaseCount}>Increase count</button>
      </div>
    </>
  )
})

export default CounterButton
