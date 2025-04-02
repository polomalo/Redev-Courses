import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import ListComponent from './components/ListComponent.jsx'

function App() {
  const [items, setItems] = useState(['First', 'Second', 'Third'])

  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleAddItem()
    }
  }

  const handleModifyItem = index => {
    const newItems = [...items]
    newItems[index] = `!!!${newItems[index]}`
    setItems(newItems)
  }

  return (
    <>
      <h1>List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          placeholder="Enter new item"
        />
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <ListComponent items={items} onModifyItem={handleModifyItem} />
    </>
  )
}

export default App
