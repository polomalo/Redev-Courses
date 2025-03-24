import React from 'react'

function ChildComponent({ name, count }) {
  return (
    <h2>
      Hi, {name}! Counter now: {count}
    </h2>
  )
}

export default ChildComponent
