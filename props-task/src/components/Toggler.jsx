import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const Toggler = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <label className="toggler">
      <input type="checkbox" onClick={toggleTheme} />
      <span className="toggler-slider round"></span>
    </label>
  )
}

export default Toggler
