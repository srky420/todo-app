import React from 'react'
import Todo from './Todo';

export default function Todos(props) {
  return (
    <div className="container mt-4 mb-4">
      <h2 className="text-center" >Todo List</h2>

      { props.todos.map((todo) => {
        return <Todo todo={ todo } key={ todo.id } onDelete={ props.onDelete } />
      })}
      
    </div>
  );
}
