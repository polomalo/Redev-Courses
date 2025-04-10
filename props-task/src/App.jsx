import './App.css'
import React, { useState, useCallback } from 'react'
import SearchInput from './components/SearchInput.jsx'
import ItemList from './components/ItemList.jsx'
import CounterButton from './components/CounterButton.jsx'
import Toggler from './components/Toggler.jsx'
import ThemeContext from './contexts/ThemeContext.jsx'

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
  const [theme, setTheme] = useState('light')

  const increaseCount = useCallback(() => setCount(count => count + 1), [])

  const handleSearchValue = useCallback(item => {
    setSearchValue(item)
  }, [])

  const toggleTheme = useCallback(() =>
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  )

  const appStyle = {
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5',
    color: theme === 'dark' ? '#fff' : '#333',
    transition: 'all 0.3s ease',
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={appStyle}>
        <Toggler />
        <p>Count: {count}</p>
        <CounterButton count={count} increaseCount={increaseCount} />
        <SearchInput value={searchValue} onChange={handleSearchValue} />
        <ItemList items={allItems} searchValue={searchValue} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
