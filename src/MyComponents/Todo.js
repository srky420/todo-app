import React from 'react'

export default function Todo(props) {
  return (
    <div className="mb-3">
      <h4>{ props.todo.name }</h4>
      <p> { props.todo.desc } </p>
      <button className="btn btn-danger btn-sm" onClick={ () => { props.onDelete(props.todo) } }>Delete</button>
    </div>
  )
}
