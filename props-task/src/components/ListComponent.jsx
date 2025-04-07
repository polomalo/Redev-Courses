import React from 'react'

const List = ({ items, onModifyItem }) => {
  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>
          {title}
          <button onClick={() => onModifyItem(id)}>Modify</button>
        </li>
      ))}
    </ul>
  )
}

export default List
