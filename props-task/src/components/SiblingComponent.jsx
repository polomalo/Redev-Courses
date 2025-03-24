import React, { useState } from 'react'

function SiblingComponent() {
  const [text, setText] = useState('something')
  const changeText = () => {
    setText('REDEV')
  }
  return (
    <div>
      <h2>Text: {text}</h2>
      <button onClick={changeText}>Change text</button>
    </div>
  )
}

export default SiblingComponent
