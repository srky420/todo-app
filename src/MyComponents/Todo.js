import React from 'react'

export default function Todo(props) {
  return (
    <div>
      <h3>{ props.todo.name }</h3>
      <p> { props.todo.desc } </p>
      <button className="btn btn-danger btn-sm" onClick={ () => { props.onDelete(props.todo) } }>Delete</button>
    </div>
  )
}
