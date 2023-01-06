import React from 'react'

export default function Todo(props) {
    
  return (
    <li>
        <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleComplete()} />
        {props.todo.title}
    </li>
  )
}
