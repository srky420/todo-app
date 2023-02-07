import React from 'react'
import Todo from './Todo';

export default function Todos(props) {
  // Style
  let todoStyle = {
    minHeight: "70vh"
  }

  return (
    <div className="container mt-4 mb-4" style={todoStyle}>
      <h3>Todo List</h3>
      <hr/>
        {props.todos.length === 0 ? "No todos to display" :
          props.todos.map((todo) => {
          return <Todo todo={ todo } key={ todo.id } onDelete={ props.onDelete } />
          })
        }

    </div>
  );
}
