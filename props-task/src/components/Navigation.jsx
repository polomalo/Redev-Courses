import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const Navigation = () => {
  const navLinks = [
    { id: 1, title: 'Реакт - это...', link: 'reactInfo' },
    { id: 2, title: 'С чего начать?', link: 'beginning' },
    { id: 3, title: 'Структура проекта', link: 'projectStructure' },
    { id: 4, title: 'Введение в VirtualDOM', link: 'virtualDOM' },
    { id: 5, title: 'Components', link: 'components' },
    { id: 6, title: 'Props', link: 'props' },
    { id: 7, title: 'State', link: 'state' },
    { id: 8, title: 'LifeCycle', link: 'lifeCycle' },
    { id: 9, title: 'Events и как работать с ними', link: 'events' },
    { id: 10, title: 'Refs, Fragment, key, React.memo', link: 'refs' },
    { id: 11, title: 'Context', link: 'context' },
    { id: 12, title: 'React Router V6', link: 'router' },
    { id: 13, title: 'React-hook-form VS formik', link: 'form' },
    { id: 14, title: 'STORAGEs', link: 'storages' },
    { id: 15, title: 'HOC', link: 'hoc' },
  ]
  return (
    <ul className="app-nav">
      {navLinks.map(({ id, title, link }) => (
        <li key={id}>
          <Link to={`/${link}`}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
