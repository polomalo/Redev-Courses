import './App.css'
import React, { useState, useCallback } from 'react'
import SearchInput from './components/SearchInput.jsx'
import ItemList from './components/ItemList.jsx'
import CounterButton from './components/CounterButton.jsx'

function App() {
  const generateItems = () => {
    const items = []
    for (let i = 1; i <= 100; i++) {
      items.push({ id: i, title: i })
    }
    return items
  }

  const allItems = generateItems()

  const [count, setCount] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  const increaseCount = useCallback(() => setCount(count => count + 1), [])

  const handleSearchValue = useCallback(item => {
    setSearchValue(item)
  }, [])

  return (
    <>
      <p>Count: {count}</p>
      <CounterButton count={count} increaseCount={increaseCount} />
      <SearchInput value={searchValue} onChange={handleSearchValue} />
      <ItemList items={allItems} searchValue={searchValue} />
    </>
  )
}

export default App
