// Implement pagination in React using useState and useEffect hooks.
// Complete prev , next and page numbers functionality.

import React, {useState, useEffect} from "react";
import axios from "axios";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoPerPage, setTodoPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  const numOfTotalPages = Math.ceil(todo.length / todoPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  const indexLastTodo = currentPage * todoPerPage;
  const indexFirstTodo = indexLastTodo - todoPerPage;

  const visibleTodos = todo.slice(indexFirstTodo, indexLastTodo);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>No of pages: {numOfTotalPages}</h2>
      <h2>Todos on single page: {visibleTodos.length}</h2>
      <h1>Todo List</h1>
      
      <ol>
        
        {visibleTodos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        
      </ol>

      <span>Prev</span>
      <p>
        {pages.map(page => (
          <span key={page}> {page} </span>
        ))}
      </p>
      <span>Next</span>
    </div>
  );
};

export default App;
