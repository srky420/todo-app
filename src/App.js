import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of", todo);
    setTodos(todos.filter((e) => {
      return e!==todo
    }));
  }

  // Todos in JSON

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Do dishes",
      desc: "Do the dinner dishes"
    },
    {
      id: 2,
      name: "Do homework",
      desc: "Do tomorrow's homework"
    },
    {
      id: 3,
      name: "Do meditate",
      desc: "Do a meditation session using meditate app"
    }
  ]);

  const addTodo = (name, desc) => {
    console.log("I will add this todo", name, desc)
    let id = todos[todos.length - 1].id + 1;

    let myTodo = {
      id: id,
      name: name,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }


  return (
    <>
      <Header title="Todo App" searchBar={ false }/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={ todos } onDelete={ onDelete }/>
      <Footer/>
    </>
  );
}

export default App;
