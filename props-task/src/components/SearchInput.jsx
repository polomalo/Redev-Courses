import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const SearchInput = React.memo(({ inputValue, onChange }) => {
  const { theme } = useContext(ThemeContext)
  const inputStyle = {
    backgroundColor: theme === 'dark' ? '#c5c1b8' : '#222',
    color: theme === 'dark' ? '#000000' : '#fff',
    height: '30px',
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => onChange(e.target.value)}
          placeholder="Enter item"
          style={inputStyle}
        />
      </div>
    </>
  )
})

export default SearchInput
