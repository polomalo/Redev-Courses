import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const CounterButton = React.memo(({ increaseCount }) => {
  const { theme } = useContext(ThemeContext)
  const buttonStyle = {
    backgroundColor: theme === 'dark' ? '#c5c1b8' : '#222',
    color: theme === 'dark' ? '#000000' : '#fff',
  }
  return (
    <>
      <div>
        <button onClick={increaseCount} style={buttonStyle}>
          Increase count
        </button>
      </div>
    </>
  )
})

export default CounterButton
