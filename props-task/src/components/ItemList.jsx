import React, { useMemo } from 'react'

const ItemList = ({ items, searchValue }) => {
  const filteredItems = useMemo(() => {
    return items.filter(
      ({ title }) =>
        title.toString().toLowerCase() === searchValue.toLowerCase()
    )
  }, [items, searchValue])
  return (
    <>
      <h2>List of items</h2>
      <ul className="itemList">
        {(searchValue === '' ? items : filteredItems).map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  )
}

export default ItemList
