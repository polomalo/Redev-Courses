import React, { Component } from 'react'
import axios from 'axios'

class LifecycleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      loading: true,
      error: null,
      count: 0,
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  componentDidMount() {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then(response => {
        this.setState({ data: response.data, loading: false })
      })
      .catch(error => {
        this.setState({ error: error, loading: false })
      })
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count update: ${prevState.count} -> ${this.state.count}`)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { data, loading, error, count } = this.state

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error.message}</div>
    }

    return (
      <div>
        <h1>Mounting (class)</h1>
        <h3>Pokemon: {data.name}</h3>
        <img
          src={data?.sprites?.other?.dream_world?.front_default}
          alt={data.name}
        />
        <h1>Updating (class)</h1>
        <p>Count: {count}</p>
        <button onClick={this.increment}>Increase</button>
      </div>
    )
  }
}

export default LifecycleComponent
