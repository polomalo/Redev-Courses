import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import ListComponent from './components/ListComponent.jsx'

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' },
  ])

  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([
        ...items,
        { id: items[items.length - 1].id + 1, title: inputValue },
      ])
      setInputValue('')
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleAddItem()
    }
  }

  const handleModifyItem = id => {
    setItems(
      items.map(el => (el.id === id ? { ...el, title: `!!!${el.title}` } : el))
    )
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
