import React from 'react'

const CounterButton = React.memo(({ increaseCount }) => {
  return (
    <>
      <div>
        <button onClick={increaseCount}>Increase count</button>
      </div>
    </>
  )
})

export default CounterButton
