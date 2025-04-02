import React from 'react'

const List = ({ items, onModifyItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onModifyItem(index)}>Modify</button>
        </li>
      ))}
    </ul>
  )
}

export default List
