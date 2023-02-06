import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';


function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of", todo);
  }
  
  // Todo JSON
  let todos = [
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
  ]


  return (
    <>
      <Header title="Todo App" searchBar={ false } />
      <Todos todos={ todos } onDelete={ onDelete }/>
      <Footer />
    </>
  );
}

export default App;
