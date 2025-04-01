import React, { useState, useEffect, Component, use } from 'react'
import axios from 'axios'

const LifecycleComponentFunc = () => {
  const [apiState, setApiState] = useState({
    data: null,
    loading: true,
    error: null,
  })
  const [count, setCount] = useState(0)
  const [prevCount, setPrevCount] = useState(0)

  const increment = () => {
    setCount(count => count + 1)
  }

  const displayCount = count % 2 === 0 ? count : count - 1

  const getAPI = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL)
      setApiState({
        data: response.data,
        loading: false,
        error: null,
      })
    } catch (error) {
      setApiState({
        data: null,
        loading: false,
        error: error,
      })
    }
  }

  useEffect(() => {
    setPrevCount(count)
  }, [count])

  useEffect(() => {
    if (prevCount !== count) {
      console.log(`Count update: ${prevCount} -> ${count}`)
    }
  }, [count, prevCount])

  useEffect(() => {
    getAPI()
  }, [])

  useEffect(() => {
    return () => console.log('componentWillUnmount')
  }, [])

  if (apiState.loading) {
    return <div>Loading...</div>
  }

  if (apiState.error) {
    return <div>Error: {apiState.error.message}</div>
  }

  return (
    <div>
      <h1>Mounting (function)</h1>
      <h3>Pokemon: {apiState.data.name}</h3>
      <img
        src={apiState.data?.sprites?.other?.dream_world?.front_default}
        alt={apiState.data.name}
      />
      <h1>Updating (function)</h1>
      <p>Count: {displayCount}</p>
      <button onClick={increment}>Increase</button>
    </div>
  )
}

export default LifecycleComponentFunc
