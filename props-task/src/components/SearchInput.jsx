import React from 'react'

const SearchInput = React.memo(({ inputValue, onChange }) => {
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => onChange(e.target.value)}
          placeholder="Enter item"
        />
      </div>
    </>
  )
})

export default SearchInput
