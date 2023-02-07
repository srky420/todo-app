import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of", todo);
    setTodos(todos.filter((e) => {
      return e!==todo
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (name, desc) => {
    let id = 1;

    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1;
    }

    let myTodo = {
      id: id,
      name: name,
      desc: desc
    }
    setTodos([...todos, myTodo]);

  }

    // Todos in JSON

    const [todos, setTodos] = useState(initTodos);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);


  return (
    <>
      <Router>
        <Header title="Todo App" searchBar={ false }/>
        
        <Routes>
          <Route exact path="/" element={ 
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={ todos } onDelete={ onDelete }/> 
            </>
          }>
          </Route>
          
          <Route exact path="/about" element={ <About/> }>
          </Route>
        </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
